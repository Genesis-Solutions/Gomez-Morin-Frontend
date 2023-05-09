import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

/**
 * Sends a POST request to create a new moral request.
 *
 * @function
 * @async
 * @param {Object} data - The data object containing the sign and membretatedLetterDoc fields.
 * @param {string} data.sign - The signature of the requester.
 * @param {FileList} data.membretatedLetterDoc - The file uploaded by the requester.
 * @returns {Promise} A Promise that resolves with the response data if the request is successful, or rejects with an error message if the request fails.
 */
export const createRequestMoral = async (data) => {
  const formData = new FormData();
  const { membretatedLetterDoc, userId, date } = data;
  formData.append("file", membretatedLetterDoc[0]);
  formData.append("userPtr", userId);
  formData.append("requestDate", date);
  try {
    const response = await axios({
      url: `${baseUrl}/solicitudes/request-letter`,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(err);
  }
};
