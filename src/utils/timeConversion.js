export const timeConversion = (mins) => {
  const m = mins % 60
  const h = (mins - m) / 60
  return `${h}ч ${m}м`
};