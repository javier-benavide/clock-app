export const fecthHour = async (continent: string, city: string) => {
  try {
    const res = await fetch(
      `http://worldtimeapi.org/api/timezone/${continent}/${city}`
    );
    const { utc_datetime, utc_offset } = await res.json();
    const hour = utc_datetime.slice(11, -13);
    const utcDiff = utc_offset.slice(0, -3);
    let [hours, min, sec] = hour.split(":");
    hours = parseInt(hours);
    const utcNumber = parseInt(utcDiff.slice(1));

    const time = hours - utcNumber >= 0 && hours - utcNumber < 12 ? "am" : "pm";

    if (hours < 12) hours = hours + 12;

    if (utcDiff[0] === "-") {
      let totalHour = hours - utcNumber;

      totalHour = ((totalHour - 1) % 12) + 1;

      const localTime = `${totalHour}:${min}:${sec} ${time}`;

      return localTime;
    } else {
      let totalHour = hours + utcNumber;

      totalHour = ((totalHour - 1) % 12) + 1;

      const localTime = `${totalHour}:${min}:${sec} ${time}`;

      return localTime;
    }
  } catch (error) {
    console.log(error);
  }
};
