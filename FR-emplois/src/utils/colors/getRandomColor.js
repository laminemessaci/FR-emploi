// @flow

const COLORS = ['#0097A9', '#6EC1B4', '#C4D600', '#007680', '#005487']

/** @function getRandomColor
 * @description Returns a random color: #0097A9 || #6EC1B4 || #C4D600 || #007680 || #005487
 *
 * @returns {String} any color from COLORS
 */
export const getRandomColor = (): String => COLORS[Math.floor(Math.random() * COLORS.length)]
