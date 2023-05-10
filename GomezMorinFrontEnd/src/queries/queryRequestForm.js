import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

/**
 * Creates an Axios request with the given data
 *
 * @param {object} data - An object containing the data required to create the request
 * @param {string} data.typeEvent - Type of the event
 * @param {string} data.nameEvent - Name of the event
 * @param {string} data.targetAudience - Target audience of the event
 * @param {string} data.generalDescription - General description of the event
 * @param {string} data.startDay - Start day of the event
 * @param {string} data.startTime - Start time of the event
 * @param {string} data.endDay - End day of the event
 * @param {string} data.endTime - End time of the event
 * @param {string} data.openingDay - Opening day of the event
 * @param {string} data.inauguration - Inauguration of the event
 * @param {string} data.authorities - Authorities of the event
 * @param {string} data.place - Place of the event
 * @param {string} data.cost - Cost of the event
 * @param {string} data.fee - Fee of the event
 * @param {string} data.socialNetwork - Social network of the event
 * @param {string} data.ineDoc - INE document of the requester
 * @param {string} data.addressDoc - Address document of the requester
 * @param {string} data.curpDoc - CURP document of the requester
 * @param {string} data.extraDoc - Extra document of the requester
 * @param {string} data.requestDate - Date of the request
 * @param {string} data.nameRequester - Name of the requester
 * @param {string} data.cellphone - Cellphone number of the requester
 * @param {string} data.phoneEmergency - Emergency phone number of the requester
 * @param {string} data.email - Email of the requester
 * @param {string} data.direction - Direction of the event
 * @param {string} data.postalCode - Postal code of the event
 * @param {string} data.street - Street of the event
 * @param {string} data.colony - Colony of the event
 * @param {string} data.publicEvent - Public or private event
 * @param {string} data.chairNumber - Number of chairs required for the event
 * @param {string} data.specificDescription - Specific description of the event
 * @param {string} data.assistance - Assistance required for the event
 * @param {string} data.ages - Ages allowed for the event
 * @param {string} data.requiredSpace - Required space for the event
 * @param {string} data.equipment - Equipment required for the event
 * @param {string} data.selfEquipment - Self equipment for the event
 * @param {string} data.softInstallation - Soft installation for the event
 * @param {string} data.electricInstallation - Electric installation for the event
 * @param {string} data.mounting - Mounting for the event
 * @param {string} data.tableNumber - Number of tables required for the event
 * @param {string} data.openingDayDate - Opening day date of the event
 * @param {string} data.openingDayTime - Opening day time of the event
 * @param {string} data.sound - Sound required for the event
 * @param {string} data.microphone - Microphone required for the event
 * @returns {Promise} A promise that resolves with the response data from the server
 */

export const createRequest = async (data) => {
  const formData = new FormData();
  const {
    typeEvent,
    nameEvent,
    targetAudience,
    generalDescription,
    startDay,
    startTime,
    endDay,
    endTime,
    openingDay,
    inauguration,
    authorities,
    place,
    cost,
    fee,
    socialNetwork,
    ineDoc,
    addressDoc,
    curpDoc,
    extraDoc,
    requestDate,
    nameRequester,
    cellphone,
    phoneEmergency,
    email,
    direction,
    postalCode,
    street,
    colony,
    publicEvent,
    chairNumber,
    specificDescription,
    assistance,
    ages,
    requiredSpace,
    equipment,
    selfEquipment,
    softInstallation,
    electricInstallation,
    mounting,
    tableNumber,
    openingDayDate,
    openingDayTime,
    sound,
    microphone,
    userId,
  } = data;

  if (authorities) {
    formData.append("authorities", authorities);
  }

  if (fee) {
    formData.append("fee", fee);
  }

  if (typeEvent === "Evento" || typeEvent === "Taller") {
    formData.append("assistance", assistance);
    formData.append("ages", ages);
    formData.append("equipment", equipment);
    formData.append("selfEquipment", selfEquipment);
    formData.append("softInstallation", softInstallation);
    formData.append("electricInstallation", electricInstallation);
    formData.append("mounting", mounting);
    formData.append("tableNumber", tableNumber);
  }

  if (typeEvent === "Evento" || typeEvent === "Exposición") {
    formData.append("requiredSpace", requiredSpace);
  }

  if (typeEvent === "Exposición") {
    formData.append("openingDayDate", openingDayDate);
    formData.append("openingDayTime", openingDayTime);
    formData.append("sound", sound);
    formData.append("microphone", microphone);
  }

  formData.append("typeEvent", typeEvent);
  formData.append("nameEvent", nameEvent);
  formData.append("targetAudience", targetAudience);
  formData.append("generalDescription", generalDescription);
  formData.append("startDay", startDay);
  formData.append("startTime", startTime);
  formData.append("endDay", endDay);
  formData.append("endTime", endTime);
  formData.append("openingDay", openingDay);
  formData.append("inauguration", inauguration);
  formData.append("place", place);
  formData.append("cost", cost);
  formData.append("socialNetwork", socialNetwork);
  formData.append("requestDate", requestDate);
  formData.append("nameRequester", nameRequester);
  formData.append("cellphone", cellphone);
  formData.append("phoneEmergency", phoneEmergency);
  formData.append("email", email);
  formData.append("direction", direction);
  formData.append("postalCode", postalCode);
  formData.append("street", street);
  formData.append("colony", colony);
  formData.append("publicEvent", publicEvent);
  formData.append("chairNumber", chairNumber);
  formData.append("specificDescription", specificDescription);
  formData.append("userPtr", userId);

  const arrayFile = [ineDoc[0], addressDoc[0], curpDoc[0]];
  if (extraDoc) {
    arrayFile.push(extraDoc[0]);
  }

  arrayFile.map((file) => {
    formData.append("file", file);
  });

  try {
    const response = await axios({
      url: `${baseURL}/solicitudes/solicitud`,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
 * This function retrieves a form for a given user from a server using HTTP GET request.
 *
 * @param {string} userPtr - The user pointer of the user for which the form should be retrieved.
 * @param {Object} [queryParams={}] - Optional object containing any additional query parameters for the HTTP GET request.
 * @returns {Promise} - A Promise that either resolves with the response data or rejects with an error if the request fails.
 */
export const getForm = async (userPtr, queryParams = {}) => {
  try {
    const response = await axios({
      url: `${baseURL}/solicitudes/${userPtr}`,
      method: "GET",
      params: queryParams,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
 * Function to retrieve all forms of a given user from the server
 *
 * @param {string} userId - The ID of the user
 * @returns {Promise} A Promise that resolves to an array of forms or rejects with an error
 */
export const getAllForms = async (userId) => {
  try {
    const body = {
      id: userId,
    };
    const response = await axios.post(
      `${baseURL}/solicitudes/request-all`,
      body
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
 * Updates the form with the given ID by sending a PATCH request to the server with the specified data.
 *
 * @param data an object containing the data to update the form with, including the form's folio number, status, and ID.
 * @return a Promise that resolves with the updated form data if the request succeeds, or rejects with an error if the request fails.
 */

export const updateForms = async (data) => {
  try {
    const { folio, estatus, idForm, userId } = data;
    const body = {
      folio: folio,
      status: estatus,
      id: userId,
    };
    console.log(folio);
    console.log(estatus);
    console.log(userId);
    const response = await axios.patch(
      `${baseURL}/solicitudes/updateRequest/${idForm}`,
      body
    );

    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};
