import * as types from "../constants/userType";
import Axios from "axios";
import {API} from "../helpers/config";

// const apiUrl = apiUrl;

export const requestGetAllUsers = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `${API}/users`,
      crossdomain: true
    })
      .then(res => {
        dispatch(actGetAllUsers(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetAllUsers = user => {
  return {
    type: types.GET_ALL_USERS,
    payload: user
  };
};

export const actDeleteUser = id => {
    return {
        type: types.DELETE_USERS,
        payload: id
    }
}