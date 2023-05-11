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
