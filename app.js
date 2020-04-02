//book constructor
class BookClassItem {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI constructor
function UI() {}

//add book to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  //create table row
  const row = document.createElement("tr");
  //insert columns
  row.innerHTML = `<td>${book.title}</td> <td>${book.author}</td> <td>${book.isbn}</td> <td><a href='#' class = 'delete'>X<a></td>`;
  list.appendChild(row);
};
//add event listener to delete button
document.getElementById("book-list").addEventListener("click", function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("Book deleted.", "success");
  e.preventDefault();
});
//delete book function
UI.prototype.deleteBook = function(target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};
//function to show error message
UI.prototype.showAlert = function(message, className) {
  //create alert div
  const errorDiv = document.createElement("div");
  //add classes
  errorDiv.className = `alert ${className}`;
  //create text
  errorDiv.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector(".container");
  //get form
  const form = document.querySelector("#book-form");
  //insert alert
  container.insertBefore(errorDiv, form);
  //have alert timout
  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 2000);
};
//function to clear fields after submit
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//add event listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  //get form field values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  //instantiate book
  const book = new BookClassItem(title, author, isbn);
  //instantiate UI
  const ui = new UI();
  //validate entries
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    //add book to list
    ui.addBookToList(book);
    ui.showAlert("Book added successfully.", "success");
    //clear fields
    ui.clearFields();
  }
  e.preventDefault();
});
