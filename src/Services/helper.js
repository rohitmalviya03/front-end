import axios from "axios";
export let BASE_URL='http://localhost:9996';

export const myAxios=axios.create({

    baseURL:BASE_URL,
})