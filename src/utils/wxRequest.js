import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip';
import { API_SECRET_KEY } from './constant';

const wxRequest = async(params = {}, url) => {
    tip.loading();
    let query = params.query || {};
    let timestamp = util.getCurrentTime();
    query.sign = md5.hex_md5((timestamp + API_SECRET_KEY).toLowerCase());
    query.time = timestamp;
    // console.log('%s 请求参数为: %O', query.method || 'GET', query);
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: query,
        header: { 'Content-Type': 'application/json' },
    });
    tip.loaded();
    return res;
};

export {
  wxRequest
}
