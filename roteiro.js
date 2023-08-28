document.addEventListener('DOMContentLoaded', function () {
  const bookList = document.getElementById('book-list');
  const addBookButton = document.getElementById('add-button');
  const bookTitleInput = document.getElementById('book-title');

  addBookButton.addEventListener('click', function () {
    const title = bookTitleInput.value;
    if (title) {
      const bookItem = document.createElement('li');
      bookItem.innerHTML = `
        <span>${title}</span>
        <button class="remove-button">Remover</button>
      `;
      bookList.appendChild(bookItem);

      bookTitleInput.value = '';

      const removeButton = bookItem.querySelector('.remove-button');
      removeButton.addEventListener('click', function () {
        bookList.removeChild(bookItem);
      });
    }
  });
});
