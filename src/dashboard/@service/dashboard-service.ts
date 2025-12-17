import axios from '@/@/vendors/axios/axios';

const URL = process.env.VITE_API_TREND;

const GetAllOrderTrend = async (payload: any) => {
    return await axios.post(`https://localhost:7283/production/trend`, payload).then((Response: any) => {
        return Response.data;
    });
}

export {
    GetAllOrderTrend,
};