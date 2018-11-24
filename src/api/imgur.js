import qs from 'qs';
import imgurOAuth from '../imgurOAuth';

const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const queryString = {
      client_id: imgurOAuth.clientId,
      response_type: "token"
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  }
}