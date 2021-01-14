
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