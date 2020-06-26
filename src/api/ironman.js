import axios from "axios";
import {getToken} from "../functions/getToken";
const BIG_SIX_URL = "https://ironman.coderaf.com/workout-program/big-six";

// const addTraining = (training, success, clearError,) => {
//     axios.post(TRAINING_URL, training, {
//         headers: {
//             'Access-Token': getToken()
//         },
//     })
//         .then(function (res) {
//             console.log('treningi wyslane');
//             clearError();
//             success();
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

const getBigSix = (success) => {
    axios.get(
        BIG_SIX_URL,
        {
            'headers': {'Access-Token': getToken()}
        })
        .then(function (response) {
            // handle success
            success(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
};

export {getBigSix};