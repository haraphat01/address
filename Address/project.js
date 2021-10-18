$("#submit").click(function(e){
    e.preventDefault();

    function count(){
        let c = 0;
        let a = $("#table tr")
        for(let i =0; a.length; i++){
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
    $("#tbody").append(`<tr id="tr"><td>${counter}</td><td>${firstName}</td><td>${lastName}</td><td>${phone1}</td><td>${address}</td><td>${destroy}</td></tr>`);
    
   

  });
   
//   Excerpt from w3school
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  