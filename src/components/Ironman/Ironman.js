import axios from "axios";
import {getToken} from "../../functions/getToken";
const USER_URL = "https://ironman.coderaf.com/user";
const TRAINING_URL = "https://ironman.coderaf.com/training";
const BIG_SIX_URL = "https://ironman.coderaf.com/big-six";

const addTraining = (training, success) => {

    axios.post(TRAINING_URL, training, {
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
    axios.post(USER_URL, user, {
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

const getTrainings = (training, trainings) => {
    axios.get(
        TRAINING_URL,
        {
            'headers': {'Access-Token': getToken()}
        })
        .then(function (response) {
            // handle success
            console.log('treningi pobrane');
            training(response.data[response.data.length - 1]);
            trainings(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
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
            console.log('treningi pobrane');
            success(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

// TODO: ogarnac MAIN i BIG-SIX FETCH
export {addTraining, registerUser, getTrainings, getBigSix};