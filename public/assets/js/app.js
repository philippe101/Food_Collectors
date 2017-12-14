$(document).ready(function() {

  // When the page loads, grab all of our data
  function getOrders() {
	  $.get('/api/orders/all', function(data) {
	  	orders = data;
	    if (data.length !== 0) {

	      for (var i = 0; i < data.length; i++) {


	        $("#table > tbody").append("<tr><th>" + data[i].id + "</td><td>" + data[i].name + "</td><td>" + data[i].quantity + "</td><td>" + data[i].expiration + "</td><td>" + data[i].status + "</td><td>" + "<button class='btn btn-dark text-white' id='food-edit'>Edit</button> <button class='btn btn-dark text-white' id='food-delete'>Delete</button>" + "</td></th>");
	      }
	    }
	  });
	}

  // Adding event listeners for deleting, editing, and adding todos
  // $(document).on("click", "food-edit", editItem);
  $(document).on("click", "#food-delete", deleteItem);
  // $(document).on("click", ".todo-item", editTodo);
  // // $(document).on("keyup", ".todo-item", finishEdit);
  // $(document).on("blur", ".todo-item", cancelEdit);
  // $(document).on("submit", "#todo-form", insertTodo);


  //  // Our initial orders array
  // var orders = [];

   // Getting orders from database when page loads
  getOrders();

  // This function deletes a order when the user clicks the delete button
  function deleteItem(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: '/api/order/:id' + id
    }).done(getOrders);
  }
  	
});