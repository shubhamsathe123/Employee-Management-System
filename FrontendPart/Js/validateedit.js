function validate() {
    var firstname = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('mobNo').value;
    var email = document.getElementById('emailId').value;
    var designation = document.getElementById('designation').value;
    var company =document.getElementById('company').value;
    
        let FIRSTNAME = /^[A-Z]{1}[a-z]{2,}$/;
        let LASTNAME = /^[A-Z]{1}[a-z]{2,}$/;
       let  MOBILE=/^([0-9]{1,3}[ ]+)?[0-9]{10}$/;
       let  EMAIL = /^[a-zA-Z0-9]+([._+#][a-zA-Z0-9]+)*@[a-zA-Z1-9]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,3})?$/;
      let   DESIGNATION = /^[A-Z]{1}[a-z]{2,}$/;
      let COMPANYNAME = /^[A-Z]{1}[a-z]{2,}$/;
        
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