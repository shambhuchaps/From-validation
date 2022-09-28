function validate() {
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let email = document.getElementById('email').value;
  let User = document.getElementById('username').value;
  let firstpassword = document.getElementById('password').value;
  let secondpassword = document.getElementById('confrimPassword').value;
  if (fname.length <= 0) {
    alert("Name is required");
    fname.focus();
    return false;
  }
  if (lname.length <= 0) {
    alert("Last Name is required");
    lname.focus();
    return false;
  }
  if (User.length <= 0) {
    alert("Username is required");
    User.focus();
    return false;
  }
  if (email.length <= 0) {
    alert("email is required");
    email.focus();
    return false;
  }

  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
    alert("Please enter a valid e-mail address");  
     return false;
  }
  if(firstpassword.length<6){
    alert("Password must be at least 6 characters long.")
    return false;
  }
  if(firstpassword==secondpassword){
    return true
  }else{
    alert("password must be same!")
  }

}
