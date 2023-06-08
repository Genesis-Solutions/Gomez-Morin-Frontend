import axios from "axios";
const baseUrl =
    import.meta.env.VITE_BASE_URL;

/**
 * Sends an email notification.
 *
 * @param {Object} data - The data object containing title, userId, and message.
 * @returns {Promise<Object>} - A promise that resolves to the response object.
 * @throws {Error} - If an error occurs during the API call.
 */
export const postEmail = async(data) => {
    const { title, userId, message } = data;
    const user = await axios.get(`${baseUrl}/users/${userId}`);
    const email = user.data.email;

    const body = {
        title: title,
        textBody: message,
        recipientEmail: email,
    };
    try {
        const response = await axios.post(`${baseUrl}/email`, body);
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
};

/**
 * Sends a POST request to the server to retrieve a password using the provided email and message.
 *
 * @param {Object} data - The data object containing the required information. 
 * @param {string} data.title - The title of the email.
 * @param {string} data.email - The recipient's email address. 
 * @param {string} data.message - The message body. 
 * @param {string} data.username - The username. 
 * @returns {Promise<Object>} A Promise that resolves to the response object. 
 * @throws {Error} If an error occurs during the POST request.
 */

export const postEmailPassword = async(data) => {
    const { title, email, message, username } = data;

    const body = {
        title: title,
        textBody: message,
        recipientEmail: email,
        userName: username,
    };
    try {
        const response = await axios.post(`${baseUrl}/getPassword`, body);
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
};