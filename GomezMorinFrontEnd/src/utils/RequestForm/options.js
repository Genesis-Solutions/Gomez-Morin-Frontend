/**
 * An array of objects representing the available options for a select input in the form.
 *
 * @type {Array<object>} An array containing objects with `value` and `_id` properties.
 */
export const typeEvent = [
  { value: "Evento", _id: "1" },
  { value: "Taller", _id: "2" },
  { value: "Exposición", _id: "3" },
];

/**
 * An array of equipment options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
export const equipmentOptions = [
  {
    label: "Si",
    name: "selfEquipment",
    value: true,
  },
  {
    label: "No",
    name: "selfEquipment",
    value: false,
  },
];

/**
 * An array of electric options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the voltage value of the option.
 */
export const electricOptions = [
  {
    label: "220 Voltios",
    name: "electricInstallation",
    value: "220 Voltios",
  },
  {
    label: "110 Voltios",
    name: "electricInstallation",
    value: "110 Voltios",
  },
];

/**
 * An array of software options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
export const softwareOptions = [
  {
    label: "Si",
    name: "softInstallation",
    value: true,
  },
  {
    label: "No",
    name: "softInstallation",
    value: false,
  },
];

/**
 * An array of public type options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
export const publicType = [
  {
    label: "Público",
    name: "publicEvent",
    value: true,
  },
  {
    label: "Privado",
    name: "publicEvent",
    value: true,
  },
];

/**
 * An array of mounting types.
 *
 * Each option is an object containing a value and an id.
 * The value represents the text to display and the id represents the identifier of the option.
 */
export const mountingTypes = [
  { value: "Auditorio", _id: "1" },
  { value: "Escuela", _id: "2" },
  { value: "Mesa Rusa", _id: "3" },
  { value: "Herradura Tipo U", _id: "4" },
];

/**
 * An array of sound options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
export const soundOptions = [
  {
    label: "Si",
    name: "sound",
    value: true,
  },
  {
    label: "No",
    name: "sound",
    value: false,
  },
];

/**
 * An array of microphone options.
 *
 * Each option is an object containing a label, a name and a value.
 * The label represents the text to display, the name represents the name of the field and
 * the value represents the boolean value of the option.
 */
export const microphoneOptions = [
  {
    label: "Si",
    name: "microphone",
    value: true,
  },
  {
    label: "No",
    name: "microphone",
    value: false,
  },
];
