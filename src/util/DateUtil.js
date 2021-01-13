import moment from 'moment-timezone';

export const DateUtil = {
    displayTimeInUserTimeZone(time, timezone, format='MM-DD ddd hh:mm a z') {
        return moment.tz(time, timezone).clone().tz(moment.tz.guess()).format(format);
    }
};