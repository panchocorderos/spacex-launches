const moment = require("moment");

export const getDate = (utcDate) => moment.utc(utcDate).format("DD/MM/YYYY");

export const getTime = (utcDate) => moment.utc(utcDate).format("hh:mm A");