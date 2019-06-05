import axios from 'axios';

const KEY = 'AAIzaSyAd84wQtXs_SV6r1kZurOiPcfbWw6JOOHY';


export default axios.create ({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    key: KEY
  }
})