import axios from "axios";

const baseURL = import.meta.env.VITE_BASEURL;

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
  formData.append("authorities", authorities);
  formData.append("place", place);
  formData.append("cost", cost);
  formData.append("fee", fee);
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
  formData.append("assistance", assistance);
  formData.append("ages", ages);
  formData.append("requiredSpace", requiredSpace);
  formData.append("equipment", equipment);
  formData.append("selfEquipment", selfEquipment);
  formData.append("softInstallation", softInstallation);
  formData.append("electricInstallation", electricInstallation);
  formData.append("mounting", mounting);
  formData.append("tableNumber", tableNumber);
  formData.append("openingDayDate", openingDayDate);
  formData.append("openingDayTime", openingDayTime);
  formData.append("sound", sound);
  formData.append("microphone", microphone);
  formData.append("userPtr", userId);

  const arrayFile = [ineDoc[0], addressDoc[0], curpDoc[0]];

  if (extraDoc) {
    arrayFile.push(extraDoc[0]);
  }

  formData.append("file", arrayFile);

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
