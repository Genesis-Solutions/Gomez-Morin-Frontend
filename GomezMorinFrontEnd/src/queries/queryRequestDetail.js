import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getRequestDetailed = async (userId, idForm) => {
  try {
    const body = {
      id: userId,
    };
    const response = await axios.post(
      `${baseUrl}/solicitudes/requestDetail/${idForm}`,
      body
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
 *  Function to retrieve documents 
 * 
 * @param {*} doc  - The document to retrieve
 * @returns  response.data
 */

export const getDocuments = async (doc) => {
  try {
    console.log(doc)
    const body = {
      doc: doc,
    }
    const response = await axios.post(`${baseUrl}/solicitudes/request-documents/`, body, 
      {responseType: "blob"}
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};
