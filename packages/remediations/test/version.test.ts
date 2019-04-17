import config  from './config';
import { VersionApi }  from '../api';

describe('Version', function () {
    let instance: VersionApi;

    beforeAll(() => instance = new VersionApi(config));

    test('getVersion', async function () {
        const res = await instance.getVersion();
        expect(res.status).toEqual(200);
    });
});
