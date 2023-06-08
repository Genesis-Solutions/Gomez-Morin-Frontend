/**
 * An array of objects representing the available options for a select input in the form.
 *
 * @type {Array<object>} An array containing objects with `value` and `_id` properties.
 */
export const typeEvent = [
  { value: "Evento", _id: "1" },
  { value: "Taller", _id: "2" },
  { value: "Exposición", _id: "3" },
  { value: "Curso", _id: "4" },
  { value: "Conferencia", _id: "5" },
  { value: "Seminario", _id: "6" },
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
 * Each option is an object containing a label and an ID.
 * The label represents the text to display for the option,
 * and the ID is a unique identifier for the option.
 */
export const publicType = [
  { value: "Todo público", _id: "1" },
  { value: "Privado", _id: "2" },
  { value: "Locales", _id: "3" },
  { value: "Nacionales", _id: "4" },
  { value: "Internacionales", _id: "5" },
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
 * An array of chair numbers.
 *
 * Each option is an object containing a value and an id.
 * The value represents the text to display and the id represents the identifier of the option.
 */
export const chairNumber = [
  { value: 6, _id: "1" },
  { value: 9, _id: "2" },
  { value: 10, _id: "3" },
  { value: 15, _id: "4" },
  { value: 40, _id: "5" },
];

/**
 * An array of table numbers.
 *
 * Each option is an object containing a value and an id.
 * The value represents the text to display and the id represents the identifier of the option.
 */

export const tableNumber = [
  { value: 6, _id: "1" },
  { value: 9, _id: "2" },
  { value: 10, _id: "3" },
  { value: 15, _id: "4" },
  { value: 40, _id: "5" },
];

/**
 * An array of table numbers.
 *
 * Each option is an object containing a value and an id.
 * The value represents the text to display and the id represents the identifier of the option.
 */

export const requiredEquipment = [
  { value: "Computadora/Laptop", _id: "1" },
  { value: "Proyector", _id: "2" },
  { value: "Pantalla", _id: "3" },
  { value: "Pizarrón", _id: "4" },
  { value: "Equipo de Sonido", _id: "5" },
  { value: "Bocinas", _id: "6" },
];

/**
 * An array of required spaces.
 *
 * Each option is an object containing a value and an id.
 * The value represents the text to display and the id represents the identifier of the option.
 */

export const requiredSpace = [
  { value: "Aula 1 (6 Personas)", _id: "1" },
  { value: "Aula 2 (9 Personas)", _id: "2" },
  { value: "Aula 3 (6 Personas)", _id: "3" },
  { value: "Aula 4 (6 Personas)", _id: "4" },
  { value: "Aula 5 (20 Personas)", _id: "5" },
  { value: "Aula 6 (6 Personas)", _id: "6" },
  { value: "Aula 7 (6 Personas)", _id: "7" },
  { value: "Aula 9 (20 Personas)", _id: "8" },
  { value: "Aula 11 (9 Personas)", _id: "9" },
  { value: "Aula 14 (10 Personas)", _id: "10" },
  { value: "Auditorio Principal (100 Personas)", _id: "11" },
];
