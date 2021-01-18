let firstName
let lastName
let emailId
let mobNo
let company
let designation

$(document).ready(function() {
    firstName = $('#firstName');
    lastName =  $('#lastName');
    mobNo = $('#mobNo');
    emailId = $('#emailId');
    designation = $('#designation');
    company = $('#company')
    updateData();
  });
 
function updateData()
{
    var formdata = {
        "firstName" : firstName.val(),
        "lastName" : lastName.val(),
        "mobNo" : mobNo.val(),
        "emailId" : emailId.val(),
        "designation" :designation.val(),
        "company" : company.val()
    };
console.log(formdata)
    let id=sessionStorage.getItem('var');
    // alert(id)

    $.ajax({
        type : 'POST',
        url : `http://localhost:3000/api/employee/readById/${id}`,
        success : function(newdata) {
           alert(JSON.stringify(newdata.data));
        },
        error: (error) => {
           alert(error.message) }
    })
}


 