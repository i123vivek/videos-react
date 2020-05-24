import axios from 'axios';

// const KEY = 'AIzaSyDRV6Ob-C2O9150UXTN_y5SNVPTVkvxNpM';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3'
    // params: {
    //     part: 'snippet',
    //     type: 'video',
    //     maxResults: 5,
    //     key: KEY
    // }
});