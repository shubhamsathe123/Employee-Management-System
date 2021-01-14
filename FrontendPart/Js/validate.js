function validate() {
   var firstname = document.getElementById('fname').value;
   var lastname = document.getElementById('lname').value;
   var phoneNumber = document.getElementById('mob').value;
   var email = document.getElementById('email').value;
   var designation = document.getElementById('desig').value;
   var company =document.getElementById('comp').value;
   
        FIRSTNAME = (`^[A-Z]{1}[a-z]{2,}$`);
        LASTNAME = (`^[A-Z]{1}[a-z]{2,}$`);
        MOBILE=('^([0-9]{1,3}[ ]+)?[0-9]{10}$');
        EMAIL = ('^[a-zA-Z0-9]+([._+#][a-zA-Z0-9]+)*@[a-zA-Z1-9]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,3})?$');
        DESIGNATION = (`^[A-Z]{1}[a-z]{2,}$`);
        COMPANYNAME = (`^[A-Z]{1}[a-z]{2,}$`);
       
       var firstNameResult = FIRSTNAME.test(firstname);
       var lastNameResult = LASTNAME.test(lastname);
       var phoneNumberResult = MOBILE.test(phoneNumber);
       var emailResult = EMAIL.test(email);
       var designationResult =DESIGNATION.test(designation);
       var companyResult =COMPANYNAME.test(company);
            
       if (firstNameResult == false) {
           document.getElementById('firstnameerror').innerHTML = "Invalid First Name";
       }
       if (lastNameResult == false) {
           document.getElementById('lastnameerror').innerHTML = "Invalid Last Name";
       }
       if (phoneNumberResult == false) {
        document.getElementById('phonenumerror').innerHTML = "Invalid Phone Number";
     }
       if (emailResult == false) {
           document.getElementById('emailerror').innerHTML = "Invalid Email";
       }
       if (designationResult == false) {
        document.getElementById('desigerror').innerHTML = "Invalid designation";
    }
    if (companyResult == false) {
        document.getElementById('comperror').innerHTML = "Invalid company name";
    }
     return false;
   }