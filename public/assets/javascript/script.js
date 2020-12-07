// Frontend JavaScript for burger
// Because I'm using Bulma (pure CSS) instead of Bootstrap (CSS + JS) I have to have slightly more code than others.

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  // CREATE a burger
  $('.create-form').on('submit', function(event) {
    event.preventDefault();
    const newBurger = {
      name: $('#bg').val().trim(),
      devoured: $('[name=devoured]:false').val().trim()
    };
    // Send the POST request.
    $.agax('/api/burgers', {
      type: "POST",
      data: newBurger
    })
    .then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
  // DEVOUR a burger
  $('.devour-form').on('submit', function(event) {
    const burger_id = $(this).children('.burger_id').val();
    // Send the PUT request.
    $ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    })
    .then(function(data) {
      // Reload the page to display devoured burger in proper column
      location.reload();
    });
  });
  // DELETE a burger
  $('.delete-form').on("submit", function(event) {
    const id = $(this).data('id');
    // Send the DELETE request.
    $.ajax('/api/burgers/' + id, {
      type: "DELETE"
    })
    .then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});