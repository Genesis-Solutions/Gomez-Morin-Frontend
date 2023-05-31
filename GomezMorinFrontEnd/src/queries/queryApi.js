import axios from "axios";
const baseUrl =
    import.meta.env.VITE_BASE_URL;

export const postEmail = async(data) => {
    const { title, userId, message } = data;
    const user = await axios.get(`${baseURL}/users/${userId}`)
    const email = user.email

    const body = {
        title: title,
        textBody: message,
        recipientEmail: email,
    };
    try {
        const response = await axios.post(`${baseURL}/email`, body);
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
};