import axios from "axios";
import {getToken} from "../../functions/getToken";

const addTraining = (training, success) => {
    const API = "https://ironman.coderaf.com/training";
    axios.post(API, training, {
        headers: {
            'Access-Token': getToken()
        },
    })
        .then(function (res) {
            // handle success
            console.log('treningi wyslane');
            success();
        })
        .catch(error => {
            console.log(error);
        });
}

export default addTraining;