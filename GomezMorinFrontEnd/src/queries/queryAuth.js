import axios from "axios";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { setAccessToken, setUser } from "../states/authSlice";
const baseUrl =
    import.meta.env.VITE_BASE_URL;

/**
 * Send a POST request to create a new user.
 *
 * @param {object} data - The data for the new user.
 * @param {boolean} data.isMoralRegister - Whether the user is a moral or not.
 * @param {string} data.userRegister - The username for the new user.
 * @param {string} data.mailRegister - The email address for the new user.
 * @param {string} data.passwordRegister - The password for the new user.
 * @returns {Promise} A promise that resolves with the response data on success or rejects with an error on failure.
 * @param {Object} data - An object containing the user's login credentials.
 */
export const postUser = async(data) => {
    const { isMoralRegister, userRegister, mailRegister, passwordRegister } =
    data;
    const body = {
        userName: userRegister,
        email: mailRegister,
        password: passwordRegister,
    };
    if (isMoralRegister) {
        //The ones above are for production.
        //body.ptrRol = "646f9d298506765ede040d16";
        body.ptrRol = "6451a03436c62efad459f3b4";
    } else {
        //body.ptrRol = "646fa0f9c2fda4000ff84c7f";
        body.ptrRol = "6451f22a0e8703af7a4a87b7";
    }

    try {
        const response = await axios.post(`${baseUrl}/users/`, body);
        return response.data;
    } catch (err) {
        console.log(response)
        return Promise.reject(err);
    }
};

/**
 * send a POST request to login
 *
 * @param {string} data.userName - The user's username.
 * @param {string} data.password - The user's password.
 * @returns {Promise} A promise that resolves with the response data from the API endpoint.
 * @throws {Error} If the data parameter is not an object or is missing required fields.
 */
export const useLoginUser = () => {
    const dispatch = useDispatch();

    const login = async(data) => {
        const { userName, password } = data;
        const body = {
            userName: userName,
            password: password,
        };
        try {
            const response = await axios.post(`${baseUrl}/users/login`, body, {
                withCredentials: true,
            });
            dispatch(setAccessToken(response.data.accessToken));
            const decodedToken = jwt_decode(response.data.accessToken);
            dispatch(setUser(decodedToken));
            return response.data;
        } catch (err) {
            return Promise.reject(err.response.data.message);
        }
    };
    return login;
};

/**
 * Sends a POST request to log out the current user.
 *
 * @throws {Error} If an error occurs during the logout process.
 * @returns {Promise<object>} A promise that resolves with the data returned by the server.
 */
export const logoutUser = async() => {
    try {
        const response = await axios.get(`${baseUrl}/users/logout`, {
            withCredentials: true,
        });
        return response.data;
    } catch (err) {
        return Promise.reject(err);
    }
};

/**
 * Sends a GET request to refresh the user's access token.
 * 
 * @throws {Error} If an error occurs during the refresh process.
 * @returns  {Promise<object>} A promise that resolves with the data returned by the server.
 */
export const useRefreshToken = () => {
    const dispatch = useDispatch();
    const refresh = async() => {
        try {
            const response = await axios.get(`${baseUrl}/users/refreshToken`, {
                withCredentials: true,
            });
            dispatch(setAccessToken(response.data.accessToken));
            const decodedToken = jwt_decode(response.data.accessToken);
            dispatch(setUser(decodedToken));
            return response.data;
        } catch (err) {
            return Promise.reject(err);
        }
    };
    return refresh;
};