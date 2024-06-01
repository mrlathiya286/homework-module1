function currentTime() {
  // Fetch current local time
  var d = new Date();
  var localHr = d.getHours();
  var localMin = d.getMinutes();
  var localSec = d.getSeconds();
  var localAmpm;

  // Add leading zeros
  if (localSec < 10) localSec = "0" + localSec;
  if (localMin < 10) localMin = "0" + localMin;

  // Determine AM/PM for local time
  if (localHr == 0) {
    localHr = 12;
    localAmpm = "AM";
  } else if (localHr == 12) {
    localAmpm = "PM";
  } else if (localHr > 12) {
    localHr -= 12;
    localAmpm = "PM";
  } else {
    localAmpm = "AM";
  }

  var localTime = localHr + ":" + localMin + ":" + localSec + " " + localAmpm;

  // Display local time
  document.getElementById("clock").innerHTML = localTime;

  // Fetch GMT time
  var utchr = d.getUTCHours(); // Get current Greenwich Mean Time (GMT)

  // Calculate time difference
  var timeDiff = d.getHours() - utchr;

  // Adjust time difference if negative
  var adjTimeDiff = timeDiff;
  if (adjTimeDiff < 0) {
    adjTimeDiff += 24;
  }

  // Determine time zone
  var timezone;
  switch (adjTimeDiff) {
    case 16:
    case 17:
    case 18:
      timezone = "PT"; // Pacific Time (UTC-8)
      break;
    case 15:
      timezone = "MT"; // Mountain Time (UTC-7)
      break;
    case 14:
      timezone = "CT"; // Central Time (UTC-6)
      break;
    case 13:
      timezone = "ET"; // Eastern Time (UTC-5)
      break;
    default:
      timezone = "Unknown Time Zone";
  }

  // Display time zone
  document.getElementById("timezone").innerHTML = "Time Zone: " + timezone;

  // Refresh the time every second
  setTimeout(currentTime, 1000);
}

currentTime();
