
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const getDayNameByDate = (date) => {
  const dayIndex = date.getDay();
  return weekdays[dayIndex];
}

const getMonthNameByDate = (date) => {
  const monthIndex = date.getMonth();
  return months[monthIndex];
}

const getTimeByDate = (date) => {
  // get hours
  const hours = String(date.getHours()).padStart(2, '0');
  // mins
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return hours + ':' + minutes;
}

export {
  getDayNameByDate,
  getMonthNameByDate,
  getTimeByDate,
};
