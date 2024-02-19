function convertTime(timeString) {
  // Split the time string into hour, minute, second, and period
  const [hour, minute, second, period] = timeString.split(":");

  // Convert hour and minute to numbers
  hour = parseInt(hour);
  minute = parseInt(minute);

  // Check if it's PM and add 12 hours if so
  if (period === "PM") {
    hour += 12;
  }

  // Handle midnight cases
  if (period === "AM" && hour === 12) {
    hour = 0;
  } else if (period === "PM" && hour === 12) {
    hour = 12;
  }

  // Format the output time string with leading zeros
  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
}

// Example usage
console.log(convertTime("12:01:00AM")); // Output: 00:01:00
console.log(convertTime("05:30:15PM")); // Output: 17:30:15
console.log(convertTime("12:00:00AM")); // Output: 00:00:00
console.log(convertTime("12:00:00PM")); // Output: 12:00:00
