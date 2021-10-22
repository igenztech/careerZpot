import axios from 'axios'
import { siteUrl, baseUrl } from './config'
const authorization_prefix = 'Bearer '

export const customHeaders = {
    Accept: 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    /* Authorization: authorization_prefix + token || undefined*/
};

export default axios.create({
    baseURL: siteUrl,
    headers: customHeaders,
});