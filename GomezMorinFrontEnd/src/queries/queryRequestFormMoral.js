import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const createRequestMoral = async (data) => {
  const formData = new FormData();
  const { sign, membretatedLetterDoc } = data;

  formData.append("sign", sign);
  formData.append("membretatedLetterDoc", membretatedLetterDoc[0]);

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
