// Initialize vars
const myLibrary = [];

const dialog = document.querySelector("dialog");
const bookForm = document.getElementById("bookForm");
const newBookEntry = document.getElementById("newBook");
const remBook = document.getElementById("remove");

const closeButton = document.querySelector("dialog button");
const library = document.getElementById("library");
const addBook = document.querySelector("#addBook");

function Book(title, author, pages, read, bookid) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookid = bookid;
};

function showLibrary(addedBook) {
  const newBook = document.createElement("div");
  const newTitle = document.createElement("div");
  const newAuth = document.createElement("div");
  const newPg = document.createElement("div");
  const newRead = document.createElement("div");
  const remBtn = document.createElement("button");
  const hiddenId = document.createElement("div");

  newBook.className = "book";
  library.appendChild(newBook);

  newTitle.className = "title";
  newTitle.textContent = addedBook.title;
  newBook.appendChild(newTitle);

  newAuth.className = "author";
  newAuth.textContent = addedBook.author;
  newBook.appendChild(newAuth);

  newPg.className = "pgNum";
  newPg.textContent = addedBook.pages;
  newBook.appendChild(newPg);

  remBtn.setAttribute("id", "remove");
  remBtn.textContent = "X";
  newBook.appendChild(remBtn);
  remBtn.onclick = removeBook;

  hiddenId.setAttribute("id", addedBook.bookid);
  newBook.appendChild(hiddenId);

  newRead.className = "unreadFlag";
  newRead.textContent = addedBook.read;
  newBook.appendChild(newRead);
  newRead.onclick = changeRead;
};

// Open New Book form
newBookEntry.addEventListener("click", () => {
  dialog.showModal();
});

// "X" button closes the New Book Form
closeButton.addEventListener("click", () => {
  clearForm();
  bookForm.close();
});

// Submit new book
addBook.addEventListener("click", submitForm);

// Clear dialogue fields
function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
}

function submitForm (event) {
  let newBook = new Book();
  if (document.getElementById("title").value === "" || document.getElementById("title").value === null) {
  } else if (document.getElementById("author").value === "" || document.getElementById("author").value === null) {
  }  else if (document.getElementById("pages").value === "" || document.getElementById("pages").value === null) {
  } else {
    newBook.title = document.getElementById("title").value;
    newBook.author = document.getElementById("author").value;
    newBook.pages = document.getElementById("pages").value;
    newBook.read = document.querySelector('input[name=read_status]:checked').value;
    newBook.bookid = myLibrary.length;
    myLibrary.push(newBook);
    showLibrary(newBook);
    event.preventDefault();
    clearForm();
    bookForm.close();
  }
};

// X button removes book from array and library div
function removeBook() {
  // "X" button is always previous sib to hiddenId field
  myLibrary.splice(this.nextElementSibling.id);
  event.target.parentElement.remove();
  return myLibrary;
};

// Clicking read banner changes read/unread status
function changeRead() {
  // "Read Banner" is always prior sib to hiddenId field
  let targetBook = this.previousElementSibling.id;
  if(myLibrary[targetBook].read === "Unread") {
    myLibrary[targetBook].read = "Read";
    this.textContent = "Read";
  } else {
    myLibrary[targetBook].read = "Unread";
    this.textContent = "Unread";
  }
  return myLibrary;
};