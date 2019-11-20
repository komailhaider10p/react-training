import request from '../config/axios'

export const get = (url, params) => {
  return request({
    method: 'get',
    url: url,
    params:  params
  })
}

export const download = (url, data) => {
  return request({
    method: 'post',
    responseType: 'blob',
    url: url,
    data: data
  })
}

export const post = (url, data) => {
  return request({
    method: 'post',
    url: url,
    data: data
  })
}

export const update = (url, data) => {
  return request({
    method: 'put',
    url: url,
    data: data
  })
}

export const patch = (url, data) => {
  return request({
    method: 'patch',
    url: url,
    data: data
  })
}

export const remove = (url, data) => {
  return request({
    method: 'delete',
    url: url,
    data: data
  })
}

export const HttpRequest = {
  fetch,
  post,
  update,
  patch,
  remove,
  download
};


