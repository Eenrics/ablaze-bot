/** Adds two numbers together.
 * @param {Date} oldDate - The first number.
 * @returns {string} The sum of the two numbers.
 */
export const formateDate = (oldDate: Date): string => {
  return new Date(oldDate).toDateString();
};
