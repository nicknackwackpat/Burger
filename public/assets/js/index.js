// write ajax calls here

$(function() {
    $(".is-devoured").on("click", function(event) {
      let id = $(this).data("id");
      let newDevoured = $(this).data("newDevoured");
  
      let newDevouredState = {
        devoured: newDevoured
      };

      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        name: $("#burgerName").val().trim(),
      };
  
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    });
});
