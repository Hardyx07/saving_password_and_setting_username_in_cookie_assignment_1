document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? parseInt(cookie.split('=')[1]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the value of the 'count' cookie
  let count = getCookie('count');

  // If the cookie exists, increment it; otherwise, set it to 1
  if (count !== null) {
    count += 1;
  } else {
    count = 1;
  }

  // Update the cookie with the new count value
  setCookie('count', count, 7); // Expires in 7 days

  // Display the count on the webpage
  let counterDisplay = document.createElement('p');
  counterDisplay.textContent = `Page visits: ${count}`;
  document.body.appendChild(counterDisplay);
});
