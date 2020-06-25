import axios from "axios";
import {getToken} from "../functions/getToken";
const USER_URL = "https://ironman.coderaf.com/user";
const TRAINING_URL = "https://ironman.coderaf.com/training";
const BIG_SIX_URL = "https://ironman.coderaf.com/workout-program/big-six";

const addTraining = (training, success) => {
    axios.post(TRAINING_URL, training, {
        headers: {
            'Access-Token': getToken()
        },
    })
        .then(function (res) {
            console.log('treningi wyslane');
            success();
        })
        .catch(error => {
            console.log(error);
        });
}

const registerUser = (user, token, success) => {
    axios.post(USER_URL, user, {
        headers: {
            'Access-Token': token
        },
    })
        .then(function (res) {
            console.log('user zarejestrowany');
            success();
        })
        .catch(error => {
            console.log(error);
        });
}

const getBigSix = (success) => {
    axios.get(
        BIG_SIX_URL,
        {
            'headers': {'Access-Token': getToken()}
        })
        .then(function (response) {
            // handle success
            console.log('cwiczenia pobrane');
            success(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
};

export {addTraining, registerUser, getBigSix};