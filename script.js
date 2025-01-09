
const birthdayDate = document.getElementById('birthday_date_id');
const countdownDisplay = document.getElementById('countdown');
const day_container_id = document.getElementById('day_container_id');
const hours_container_id = document.getElementById('hours_container_id');
const minutes_container_id = document.getElementById('minutes_container_id');
const seconds_container_id = document.getElementById('seconds_container_id');

    function track() {
      if (!birthdayDate.value) {
        countdownDisplay.textContent = 'Please select a date!';
        return;
      }

      // Get the birthday from the input
      const birthday = new Date(birthdayDate.value);

      // Get today's date and time
      const now = new Date();

      // Set the birthday to the current year
      birthday.setFullYear(now.getFullYear());

      // If the birthday has already passed this year, move it to next year
      if (birthday < now) {
        birthday.setFullYear(now.getFullYear() + 1);
      }

      // Calculate the time difference in milliseconds
      const timeDifference = birthday - now;

      // Convert the time difference to days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Display the countdown
      day_container_id.innerText = days;
      hours_container_id.innerText = hours;
      minutes_container_id.innerText = minutes;
      seconds_container_id.innerText = seconds;

      // Optional: Update the countdown every second
      setTimeout(track, 1000);
    }