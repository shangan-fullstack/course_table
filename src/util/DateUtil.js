import { DateTime } from "luxon";

export const DateUtil = {
    displayTimeInUserTimeZone(time, timezone, format='MM-dd ccc hh:mm a ZZZZZ', overrideTimezone) {
        const defaultZone = this.buildTime(time, timezone);
        const reZoned = defaultZone.setZone(overrideTimezone); // To local timezone
        return reZoned.toFormat(format);
    },

    compareTime(startTime, endTime, timezone) {
        const current = DateTime.now();
        const courseStartTime = this.buildTime(startTime, timezone);
        const courseEndTime = this.buildTime(endTime, timezone);
        if (courseStartTime <= current && courseEndTime >= current) {
            return 0;
        }
        if (courseStartTime <current) {
            return -1;
        }
        return 1;
    },

    buildTime(time, timezone) {
        return DateTime.fromFormat(time, "yyyy-MM-dd HH:mm", {
            zone: timezone,
            setZone: true
        });
    }
};