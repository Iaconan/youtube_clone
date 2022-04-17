import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googlepapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyD7hFueTd4vlJkE6Glhu9xU9ylFAeC-XkE'
    }
})