import axios from '@/@/vendors/axios/axios';

const URL = process.env.VUE_API_TREND;

const LoginWithEmail = (data: any) => {
    console.log('API URL:', process.env.VUE_API_TREND);
    return axios.post(`https://localhost:7283/auth/login`, data).then((Response) => {
        return Response.data.data;
    });
};

export { LoginWithEmail };