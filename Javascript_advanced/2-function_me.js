function welcomeMessage(fullName) {
    return function () {
      alert('Welcome ' + fullName);
    };
  }
  
  // Create three variables with closures
  const guillaume = welcomeMessage('Guillaume');
  const alex = welcomeMessage('Alex');
  const fred = welcomeMessage('Fred');
  
  // Call the variables as functions to display the alerts
  guillaume();
  alex();
  fred();  