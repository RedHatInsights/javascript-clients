const dotenv = require('dotenv');
const { Octokit } = require('@octokit/rest');
const util = require('util');
const fs = require('fs');
const { resolve } = require('path');

const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf8');

dotenv.config();

const refHead = process.env.GH_REF_HEAD || 'heads/master';

const octokit = new Octokit({
    auth: process.env.GH_TOKEN_PUSH,
    userAgent: 'nacho-bot',
    previews: [ 'jean-grey', 'symmetra' ],
    timeZone: 'Europe/Prague',
    baseUrl: 'https://api.github.com'
});

const encodeFile = async (filename) => Buffer.from(await readFile(filename)).toString('base64');

const pushFile = async ({ owner, repo }, fileName, message) => {
    let sha;
    try {
        const { data: contents } = await octokit.repos.getContents({
            owner,
            repo,
            path: fileName
        });
        sha = contents && contents.sha;
    } catch (e) {
        console.log(`File ${fileName} not found! Will creatre new file.`);
    }

    const filePath = resolve(__dirname, `../${fileName}`);
    const content = await encodeFile(filePath);

    console.log(`File path of ${fileName} is: ${filePath}`);
    console.log(`Content of ${fileName} is: ${content}`);

    octokit.repos.createOrUpdateFile({
        owner,
        repo,
        path: fileName,
        message: message || 'Release of new version!',
        content: content,
        ...sha && { sha }
    });
};

const generateSha = async ({ owner, repo }, fileName) => {
    const filePath = resolve(__dirname, `../${fileName}`);
    const content = await encodeFile(filePath);
    try {
        const { data: contents } = await octokit.git.createBlob({
            owner,
            repo,
            content,
            encoding: 'base64'
        });
        return {
            sha: contents.sha,
            path: fileName
        };
    } catch (e) {
        console.log('Error while generating blob sha');
    }
}

const getRef = async ({ owner, repo }) => {
    try {
        const { data: contents } = await octokit.git.getRef({
            owner,
            repo,
            ref: refHead
        });
        return contents;
    } catch (e) {
        console.log('Error while generating ref');
    }
}

const createTree = async ({ owner, repo }, files, base_tree) => {
    try {
        const { data: contents } = await octokit.git.createTree({
            owner,
            repo,
            tree: files.map(({ sha, path, type, mode }) => ({
                path,
                sha,
                type: type || 'blob',
                mode: mode || '100644'
            })),
            base_tree
          });
        return contents;
    } catch (e) {
        console.log('Error while creating tree');
    }
};

const createCommit = async ({ owner, repo }, message, tree, parents) => {
    try {
        const { data: contents } = await octokit.git.createCommit({
            owner,
            repo,
            message,
            tree,
            parents,
          });
        return contents;
    } catch (e) {
        console.log('Error while creating commit');
    }
}

const updateRef = async ({ owner, repo }, sha) => {
    try {
        const { data: contents } = await octokit.git.updateRef({
            owner,
            repo,
            ref: refHead,
            sha,
          });
        return contents;
    } catch (e) {
        console.log('Error while updating ref');
    }
}

const uploadFiles = async ({ owner, repo }, fileNames, message) => {
    console.log(`Using files ${fileNames}`);
    const fileShas = await Promise.all(fileNames.map(async (fileName) => (
        generateSha({ owner, repo }, fileName)
    )));
    console.log(`File shas ${fileShas} generated`);
    const ref = await getRef({ owner, repo });
    console.log(`Using parent ref sha ${ref.object.sha}`);
    const tree = await createTree({ owner, repo }, fileShas, ref.object.sha);
    console.log(`Using tree sha ${tree.sha}`);
    const commit = await createCommit({ owner, repo }, message, tree.sha, [ref.object.sha]);
    console.log(`Using commit sha ${commit.sha}`);
    updateRef({ owner, repo }, commit.sha);
    console.log(`Update successful!`);
}

module.exports = {
    pushFile,
    uploadFiles,
    octokit
};
