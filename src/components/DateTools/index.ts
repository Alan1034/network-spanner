/** @format */

// UTCDate为UTC时间，需要转为当前时区的时间
const toLocalDate = (UTCDate, toZero = false) => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const res = new Date(new Date(UTCDate).getTime() - offset);
  if (toZero) {
    res.setHours(0, 0, 0, 0);
  }
  return res;
};

// localDate为当前时区的时间，需要转为UTC时间
const toUTCDate = (localDate = new Date(), toZero = false) => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const res = new Date(new Date(localDate).getTime() + offset);
  if (toZero) {
    res.setHours(0, 0, 0, 0);
  }
  return res;
};

// const getStartOfMonth = (date) => {
//   date = new Date(date);
//   return new Date(date.getFullYear(), date.getMonth(), 1);
// };

const getStartOfMonth = (date) => {
  const d = new Date(date);
  d.setDate(1);
  return d;
};

const getEndOfMonth = (date) => {
  const d = new Date(date);
  // 将日期设置为下个月的第一天
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  return d;
};

export default { toLocalDate, toUTCDate, getStartOfMonth, getEndOfMonth };
