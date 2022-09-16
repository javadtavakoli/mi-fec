import axios from 'axios';

const AxiosClient = axios.create();
AxiosClient.defaults.baseURL = process.env.REACT_APP_API;
export default AxiosClient;
