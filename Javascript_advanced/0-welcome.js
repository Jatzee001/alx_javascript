function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
  
    function displayFullName() {
      alert('Welcome ' + fullName + '!');
    }
  
    displayFullName();
  }
  
  welcome('Holberton', 'School');
  alert(fullName);  