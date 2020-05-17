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

const registerUser = (user, token, success) => {
    const API = "https://ironman.coderaf.com/user";
    axios.post(API, user, {
        headers: {
            'Access-Token': token
        },
    })
        .then(function (res) {
            // handle success
            console.log('user zarejestrowany');
            success();
        })
        .catch(error => {
            console.log(error);
        });
}


export {addTraining, registerUser};