import axios from 'axios';

const APP_URL = process.env.VUE_APP_OUTLOOK;
const API_URL = APP_URL + '/api/';

export class Api {
    async getVolumeNumbers() {
        var response = await axios.get(API_URL + 'volumes');
        return response.data;
    }

    async getIssues(volumeID: Number) {
        var response = await axios.get(API_URL + 'issues/' + volumeID);
        return response.data;
    }
}

export const api = new Api();