function validate(){
  let fname = document.myForm.fname;
  let lname = document.myForm.lname;
  let email = document.myForm.email;
  let User = document.myForm.username;
  if(fname.value.length <= 0){
    alert("Name is required");
    fname.focus();
    return false;
  }
  if(lname.value.length <= 0){
    alert("Last Name is required");
    lname.focus();
    return false;
  }
  if(User.value.length <= 0){
    alert("Username is required");
    User.focus();
    return false;
  }
  if(email.value.length <= 0){
    alert("email is required");
    email.focus();
    return false;
  }
 
}