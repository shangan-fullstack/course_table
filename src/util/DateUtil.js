import moment from 'moment-timezone';

export const DateUtil = {
    displayTimeInUserTimeZone(time, timezone, format='MM-DD ddd hh:mm a z') {
        return moment.tz(time, timezone).clone().tz(moment.tz.guess()).format(format);
    },

    compareTime(startTime, endTime, timezone) {
        const current = moment(new Date());
        const courseStartTime = moment.tz(startTime, timezone);
        const courseEndTime = moment.tz(endTime, timezone);
        if (courseStartTime.isSameOrBefore(current) && courseEndTime.isSameOrAfter(current)) {
            return 0;
        }
        if (courseStartTime.isBefore(current)) {
            return -1;
        }
        return 1;
    }
};