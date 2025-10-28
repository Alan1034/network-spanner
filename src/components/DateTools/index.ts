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

export default { toLocalDate, toUTCDate };
