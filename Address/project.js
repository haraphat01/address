$("#submit").click(function(e){
    e.preventDefault();

    function count(){
        let c = 0;
        let a = $("#tbody tr")
        for (let i = 0; i < a.length; i++){
            c += 1
        }

        return c
    }
    
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let phone1 = $("#phone").val();
    let address = $("#address").val();
    let counter = count();
    let destroy = 1
    if (firstName != "" && lastName != "" && phone1 != "" && address != "", counter === " ") {
        $("#tbody").append(`<tr id="tr"><td>${counter}</td><td>${firstName}</td><td>${lastName}</td><td>${phone1}</td><td>${address}</td><td><button id="destroy" class="btn-primary">Destroy</button></td></tr>`);
       
    } else {
       alert("You must fill in the fields before you can save a contact")
    }
    
   

  });
   
//   Excerpt from w3school
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

   
       $("#destroy").click(function(){
        $(this).closest('tr').remove();
       })

       $("#tbody").on('click', '#destroy', function () {
        $(this).closest('tr').remove();
    });