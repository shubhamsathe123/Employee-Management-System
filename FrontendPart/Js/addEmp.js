let firstName
let lastName
let emailId
let mobNo
let company
let designation

$(document).ready(function () {
firstName = $('#firstName');
lastName =  $('#lastName');
mobNo = $('#mobNo');
emailId = $('#emailId');
designation = $('#designation');
company = $('#company')
})

function ajaxPost(){ 
  console.log("hello");
        var formdata = {
            "firstName" : firstName.val(),
            "lastName" : lastName.val(),
            "mobNo" : mobNo.val(),
            "emailId" : emailId.val(),
            "designation" :designation.val(),
            "company" : company.val()
        };
        console.log(formdata)
        $.ajax({
            type : 'POST',
            url : 'http://localhost:3000/api/employee/add',
            dataType: "json",
            contentType : "application/json",
            data : JSON.stringify(formdata),
            success : function(newdata) {
               alert(newdata.message)
            },
            error: (error) => { alert(error.message) }
        })
    
}