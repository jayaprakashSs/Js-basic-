    // Counter variable
    let counterValue = 0;

    // Function to update the counter value on the web page
    function updateCounter() {
      document.getElementById('counter').textContent = counterValue;
    }

    // Function to increment the counter
    function increment() {
      counterValue++;
      updateCounter();
    }

    // Function to decrement the counter
    function decrement() {
      counterValue--;
      updateCounter();
    }