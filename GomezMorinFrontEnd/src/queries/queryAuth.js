import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

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
export const postUser = async (data) => {
  const { isMoralRegister, userRegister, mailRegister, passwordRegister } =
    data;
  const body = {
    userName: userRegister,
    email: mailRegister,
    password: passwordRegister,
  };
  if (isMoralRegister) {
    body.ptrRol = "644af272bac1cb80504dc379";
  }
  try {
    const response = await axios.post(`${baseUrl}/users/`, body);
    console.log(response.data)
    return response.data;
  } catch (err) {
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

export const loginUser = async (data) => {
  const { userName, password } = data;
  const body = {
    userName: userName,
    password: password,
  };
  try {
    const response = await axios.post(`${baseUrl}/users/login`, body);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default loginUser;
