import axios from 'axios';

const KEY = 'AIzaSyDIt08WfAatwh560Zie6oYM_1I7Hm9kBZE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});