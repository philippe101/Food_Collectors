$(document).ready(function() {
	$("#username").text(getCookie("username"));
  // When the page loads, grab all of our data
  function getOrders() {
	  $.get('/api/orders/all', function(data) {
	  	orders = data;
	    if (data.length !== 0) {

	      for (var i = 0; i < data.length; i++) {


	        $("#table > tbody").append("<tr><th>" + data[i].id + "</td><td>" + data[i].name + "</td><td>" + data[i].quantity + "</td><td>" + data[i].expiration + "</td><td>" + data[i].status + "</td><td>" + "<button class='btn btn-dark text-white food-edit' data-edit='" + data[i].id + "'>Edit</button> <button class='btn btn-dark text-white food-delete' data-delete='" + data[i].id + " '>Delete</button>" + "</td></th>");
	      }
	    }
	  });
	}

$(document).on("click", "button#abc", assignUser);


  // Adding event listeners for deleting, editing, and adding todos
  // $(document).on("click", "food-edit", editItem);
  $(document).on("click", ".food-delete", deleteItem);
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
    var id = $(this).attr("data-delete");
    $.ajax({
      method: "DELETE",
      url: '/api/order/' + id
    }).done(location.reload());
  }


    function assignUser() {
        document.cookie= "username=" + $("input#name").val();
    }
    
    function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

   // This function handles showing the input box for a user to edit a todo
  function editItem() {
    var currentItem = $(this).data("tod");
    $(this).children().hide();
    $(this).children("input.edit").val(currentTodo.text);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }
  	
});