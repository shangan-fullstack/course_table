function CreateTime(date, startTime, endTime, timezone = "America/Los_Angeles") {
  this.startTime = `${date} ${startTime}`;
  this.endTime = `${date} ${endTime}`;
  this.timezone = timezone;
}

export function toContentDetails(timeList, toc) {
  return timeList.map((time, i) => {
    const details = {...toc[i + 2]};
    Object.assign(details, new CreateTime(...time));
    return details;
  });
}
