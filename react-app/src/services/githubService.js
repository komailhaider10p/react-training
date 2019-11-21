import * as httpRequest from '../services/HttpRequest'

//Get all Hcps.
const get = (params) => {
    return httpRequest.get(`/search/issues`, params);
}

export const GithubService = {
    get
  };
