$(document).ready(function () {

   function additem(ServerResponse) {
            $('.list-group').append(`<li class="list-group-item">${ServerResponse.name}</li>`);

    }

        $.getJSON('/list', function(data){  
            for(let i=0; i<data.length; i++){
                additem(data[i])
            }
        })
    

    $('#nameinput').submit(function(event){
        event.preventDefault();

        const adduser = { name: $('#name').val() };

        console.log(adduser)
        $.ajax({
            url: '/addName',
            method: 'POST',
            data: adduser,
            success: function(responseFromServer){
                additem(responseFromServer);
            }
        });

        $('#name').val('');
    });
})
