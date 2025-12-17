import axios from 'axios';

// Request interceptor for API calls
axios.interceptors.request.use(
    async (config) => {
        const token = window.localStorage.getItem('token');
        config.headers = {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const { config } = error;

        if (!config || !config.retry) {
            config.retry = 3;
            config.retryDelay = 1000;
        }

        config.retry -= 1;

        // ERR_NETWORK
        if (error.code === 'ERR_NETWORK') {
            return Promise.reject(error);
        }

        // 401
        if (error.response.status == 401 && config.retry >= 1) {
            const delayRetryRequest = new Promise((resolve) => {
                setTimeout(() => {
                    console.log('retry the request', config.url);
                    resolve();
                }, config.retryDelay);
            });
            return delayRetryRequest.then(() => axios(config));
        }
        if (error.response.status == 401) {
            location.href = '/auth/login';
        }

        if (error.response.status == 500) {
            return Promise.reject(error);
        }
        if (error.response.status == 400) {
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);

export default axios;
