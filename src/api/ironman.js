import axios from "axios";
import {getToken} from "../functions/getToken";
const BIG_SIX_URL = "https://ironman.coderaf.com/workout-program/big-six";

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