const MS_IN_A_DAY = 1000 * 60 * 60 * 24
const MS_IN_AN_HOUR = 1000 * 60 * 60

export const msToDays = ms => ms / MS_IN_A_DAY
export const msToHours = ms => ms / MS_IN_AN_HOUR

export const daysToMs = days => days * MS_IN_A_DAY
export const hoursToMs = days => days * MS_IN_AN_HOUR
