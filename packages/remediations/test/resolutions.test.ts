import config from './config';
import { ResolutionsApi }  from '../api';

describe('Resolutions', function () {
    let instance: ResolutionsApi;

    beforeAll(() => instance = new ResolutionsApi(config));

    test('getResolutionsForIssue', async function () {
        const res = await instance.getResolutionsForIssue(
            'advisor:network_bond_opts_config_issue|NETWORK_BONDING_OPTS_DOUBLE_QUOTES_ISSUE');
        expect(res.status).toEqual(200);
        expect(res.data).toHaveProperty('id');
        expect(Array.isArray(res.data.resolutions)).toBe(true);
    });

    test('getResolutionsForIssues', async function () {
        const res = await instance.getResolutionsForIssues({
            issues: [
                'advisor:network_bond_opts_config_issue|NETWORK_BONDING_OPTS_DOUBLE_QUOTES_ISSUE',
                'vulnerabilities:CVE-2017-15126'
            ]
        });
        expect(res.status).toEqual(200);
    });

    test('getResolutionsForIssue with invalid body', async function () {
        // @ts-ignore
        const pending = instance.getResolutionsForIssues([25]);
        expect(pending).rejects.toThrow('Request failed with status code 400');
    });
});
