const env = process.env;

jest.setTimeout(10000);

const config = {
    basePath: env.TEST_BASEPATH || 'http://localhost:9002/api/remediations/v1',
    baseOptions: {}
};

if (env.TEST_USERNAME || env.TEST_PASSWORD) {
    // @ts-ignore
    config.baseOptions.auth = {
        username: env.TEST_USERNAME,
        password: env.TEST_PASSWORD
    };
}

export default config;
