import config from './config';
import { RemediationsApi }  from '../api';

describe('Remediations', function () {
    let instance: RemediationsApi;

    beforeAll(() => instance = new RemediationsApi(config));

    test('getRemediations', async function () {
        const res = await instance.getRemediations();
        expect(res.status).toEqual(200);
        expect(Array.isArray(res.data.data)).toBe(true);
    });

    test('getRemediations with sorting', async function () {
        const res = await instance.getRemediations('-issue_count');
        expect(res.status).toEqual(200);
        expect(Array.isArray(res.data.data)).toBe(true);
    });
});
