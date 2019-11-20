import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const client = axios.create({
    baseURL: 'https://api.github.com'
});



  

const request = function (options) {
    const onSuccess = function (response) {
        console.debug('Request Successful!', response);
        return response.data;
    }

    const onError = function (error) {
        console.error('Request Failed:', error.config);
        debugger;
        if (error.response) {

            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);

        }
        else {
            console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    }

    return client(options)
        .then(onSuccess)
        .catch(onError);
}

export default request;