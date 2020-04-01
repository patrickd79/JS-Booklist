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
  //add book to list
  ui.addBookToList(book);
  e.preventDefault();
});
