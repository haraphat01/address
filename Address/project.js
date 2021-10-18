$("#submit").click(function(e){
    e.preventDefault();
    
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let phone1 = $("#phone").val();
    let address = $("#address").val();
    let counter = 
    $("#tbody").append(`<td>${firstName}</td><td>${lastName}</td><td>${phone1}</td><td>${address}</td>`);
    
   

  });