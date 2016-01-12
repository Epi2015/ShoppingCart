$(document).ready(function(){
  $("#cart form").submit(function(event){
    var firstNameInput = $("input#firstname").val();
    var lastNameInput = $("input#lastname").val();
    var addressInput = $("input#address").val();



    $(".firstname-confirm").text(firstNameInput);
    $(".lastname-confirm").text(lastNameInput);
    $(".address-confirm").text(addressInput);






    event.preventDefault();
  });

  $("#final-confirm").click(function(){
    var firstNameInput = $("input#firstname").val();
    var lastNameInput = $("input#lastname").val();
    var addressInput = $("input#address").val();


    $(".firstname").text(firstNameInput);
    $(".lastname").text(lastNameInput);
    $(".address").text(addressInput);

    $(".modal").hide();
    $("#cart").hide();
    $(".receipt").show();
  })
});
