function CreateTime(date, startTime, endTime, timezone = "America/Los_Angeles") {
  this.startTime = `${date} ${startTime}`;
  this.endTime = `${date} ${endTime}`;
  this.timezone = timezone;
}

function CreateTimes(date, startTime, endTime, timezone = "America/Los_Angeles") {
  console.log(date, startTime, endTime);
  if (Array.isArray(date)) {
    this.startTime = [];
    this.endTime = [];
    this.timezone = [];
    for (let i = 0; i < date.length; i++) {
      this.startTime.push(`${date[i]} ${startTime[i]}`);
      this.endTime.push(`${date[i]} ${endTime[i]}`);
      this.timezone.push(timezone);
    }
  } else if (Array.isArray(startTime)) {
    this.startTime = [];
    this.endTime = [];
    this.timezone = [];
    for (let i = 0; i < startTime.length; i++) {
      this.startTime.push(`${date} ${startTime[i]}`);
      this.endTime.push(`${date} ${endTime[i]}`);
      this.timezone.push(timezone);
    }
  } else {
    this.startTime = `${date} ${startTime}`;
    this.endTime = `${date} ${endTime}`;
    this.timezone = timezone;
  }
}

export function toContentDetails(timeList, toc) {
  return timeList.map((time, i) => {
    const details = {...toc[i + 2]};
    if (Array.isArray(time[1])) {
      Object.assign(details, new CreateTimes(...time));
    } else {
      Object.assign(details, new CreateTime(...time));
    }
    return details;
  });
}
