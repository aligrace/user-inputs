$(function() {
  
  $("#age-submit").click(function(){
 
    var ageString = $("#age").val();
    var age = parseInt(ageString);

    if ( age > 21 ) {
      $("#age-form").hide();
    } else {
      $("#answer").text("Nope");
    }

    if ( age < 21) {
      $("#age-form").hide();
    } else {
      $(".answer").text("Wrong!");
    }

    if ( age = 21 ) {
      $("#age-form").hide();
    } else {
      $("#answer").text("Correct!");

    }
    }

    }
    
  });

});
