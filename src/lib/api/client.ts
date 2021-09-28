import axios from 'axios';

// CRA가 아니면 그냥 쓸수있다.
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const client = axios.create();

client.defaults.baseURL = BACKEND_URL;
client.defaults.withCredentials = true;

export default client;
