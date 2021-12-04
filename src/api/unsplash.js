import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Authorization: Client-ID 5lqiA-e9GL6oMwtvjC9QxGnaMA11CsbQf-kqUPvYi4Y'
    }
})