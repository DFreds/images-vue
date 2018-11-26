import qs from 'qs';
import imgurOAuth from '../imgurOAuth';
import axios from 'axios';

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
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImage(clientId) {
    return axios.post(`${ROOT_URL}/3/image`, {
      headers: {
        Authorization: `Client-ID ${clientId}`
      }
    })
  }
}