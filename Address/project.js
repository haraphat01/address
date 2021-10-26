$("#submit").click(function (e) {
  e.preventDefault();

  function count() {
    let c = 0;
    let a = $("#tbody tr");
    for (let i = 0; i < a.length; i++) {
      c += 1;
    }

    return c;
  }

  let firstName = $("#firstName").val();
  let lastName = $("#lastName").val();
  let phone1 = $("#phone").val();
  let address = $("#address").val();
  let counter = count();
  let destroy = 1;
  if (firstName != "" && lastName != "" && phone1 != "" && address != "") {
    $("#tbody").append(
      `<tr id="tr"><td>${counter}</td><td>${firstName}</td><td>${lastName}</td><td>${phone1}</td><td>${address}</td><td><button id="destroy" class="btn-primary">Destroy</button></td></tr>`
    );
  } else {
    alert("You must fill in the fields before you can save a contact");
  }
});

//   Excerpt from w3school
$("#myInput").on("keyup", function () {
  var input, filter, tr, td, i;

  input = $("#myInput");
  filter = input.val().toUpperCase();
  tr = $("table tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1]; // <-- change number if you want other column to search
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});

$("#destroy").click(function () {
  $(this).closest("tr").remove();
});

$("#tbody").on("click", "#destroy", function () {
  $(this).closest("tr").remove();
});
