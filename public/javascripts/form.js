$(document).ready(function(){
    $('#myexample').DataTable(
        {
            "searching": false,
            paging: false
        });

    $(".tr-show").click(function(){
        // $("#myexample > tbody").append('<tr><td scope="col" colspan="13" rowspan="1">Rozwinięcie / dodanie dodatkowej treśći</td></tr>');

        $("#updated_contacts").append($(".addElement span").clone());


    });

});