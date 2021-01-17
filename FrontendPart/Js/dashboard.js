
$(document).ready(function() {
    console.log("in dashboard")
    $.getJSON("../Json/data.json",
        function (data) {
            var emp = "";

            $.each(data, function (key, value) {

                emp += "<tr>";
                emp += "<td>" +
                    value.firstName + "</td>";
                emp += '<td>' +
                    value.lastName + '</td>';
                emp += '<td>' +
                    value.mobNo + '</td>';
                emp += '<td>' +
                    value.emailId + '</td>';
                emp += '<td>' +
                    value.designation + '</td>';
                 emp += '<td>' +
                    value.company + '</td>';

                emp += '<td><button>Edit</button></td>';
                emp += '<td><button>Delete</button></td>';

                "</tr>";
            });

            $('#table').append(emp);
        });
});

$( document ).ready(function() { 
    // GET REQUEST  
      ajaxGet();   
    
})   
    // DO GET
    function ajaxGet(){
      $.ajax({
        type : "GET",
        contentType : "application/json",
        url : "http://localhost:3000/api/employee/read",
        success: function(data){
            var emp = "";
            $.each(data.data, function (key, value) {
          
                emp += "<tr>";
                emp += "<td>"+ 
                    value.firstName + "</td>";
                emp += '<td>' +
                    value.lastName + '</td>';
                emp += '<td>' +
                    value.mobNo + '</td>';
                emp += '<td>' +
                    value.emailId + '</td>';
                emp += '<td>' +
                    value.designation + '</td>';
                 emp += '<td>' +
                    value.company + '</td>';

                // emp += '<td> <button >Edit</button></td>';
                // emp += '<td><button >Delete</button></td>';
        //adding edit icon
        emp += `<td><button class="update" src='../Html/editEmp.html' onclick="clicked('${value._id}')">Edit</button></td>`

        //adding delete icon
        emp += `<td><button class="del"   onclick="deleteOne('${value._id}')">Delete</button></td>`

                "</tr>";
            });
            $('#table').append(emp);

        },
        error: (error) => { alert(error.message) }
      });  
    }

    const clicked = (id) => {
      console.log(id)
       location.replace("../Html/editEmp.html");
     }

     deleteOne = (id) => {
    console.log(id)
        $.ajax({
            type: 'DELETE',
            url: `http://localhost:3000/api/employee/delete/${id}`,
        })
    
        window.open("../Html/main.html", "_self")
    }