/**
*
*/


function checkReg( emailId, passWord) {
  //alert( getPeople());
  //var emailId = document.getElementById("email").value;
  //var passWord = document.getElementById("password").value;
  //var moo = form-control.getElementById("email").value;
//alert( emailId);
//alert( passWord);

  //var div = document.getElementById("validYN");
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //var checkData = JSON.parse( userData);

  var checkData = JSON.parse( getPeople());
  //var retVal = false;
  var retVal = "Error";
  var i = 0;

  //document.getElementById("validYN").innerHTML = "Is "+emailId+" Valid - No";

  //alert(mydata.length); for(var i = 0;i < checkData.length; i++)

  if ( emailId.match( mailformat)) {
    //while( i < checkData.length && retVal == false)
    while( i < checkData.length && retVal != "")
    {
      if( checkData[i].email == emailId && checkData[i].password == passWord) {
        //div.innerHTML = emailId +" is a valid name yay, Email : " + checkData[i].email;
        //retVal = true;
        retVal = "";
      }
      i++;
    }
    //if ( retVal == false) {
    if ( retVal !="") {
      //alert("Not a Registered Email Address or Incorrect Password");
      retVal = "Not a Registered Email Address or Incorrect Password";
    }
  }
  else {
    //alert("Invalid Email Address");
    retVal = "Invalid Email Address";
  }
  //div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ "Name : " + mydata[i].name +  "<br>" + "Email : " + mydata[i].email +"</p>" + "<br>";

  return retVal;
}

function newReg( firstName, surName, emailId, passWord) {

  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var nameformat = /^[a-zA-Z ]{2,}$/;
  var passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
  ///^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/
  //^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$
  ///^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  var checkData = JSON.parse( getPeople());
  //var retVal = false;
  var retVal = "Error";
  //var i = 0;

  if ( firstName != "" && surName != "" && firstName.match( nameformat) && surName.match( nameformat)) {
    if ( emailId.match( mailformat)) {
      if ( passWord.match( passwordformat)) {
        retVal = "";
      }
      else {
        retVal = "Invalid Password"
      }
    }
    else {
      retVal = "Invalid Email Address";
    }
  }
  else {
    retVal = "Invalid Name(s)";
  }

  return retVal;
}
