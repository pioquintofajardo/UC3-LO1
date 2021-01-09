const addForm = document.forms('add-book');
addForm.addEventsListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[input="text"]').value;
    
//create elemets
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

//add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

//add classes
bookName.classList.add('name')
deleteBtn.classList.add('delete')

//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
});

const list = document.querySelector('#book-list ul');

//delete books
list.addEventsListener('click'.function(e){

//add books
const addForm = document.fomrs['add-book'];
addForm.addEventsListener('submit',function(e){

//hie books
const hideBox = document.querySelector('#hide');
hideBox.addEventsListener('change',function(e){

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventsListener('keyup', function(e)){
    const term = e.target.value.toLowerCase()
    const book = list.getElementsByTagName('li');
    Array.from(books).forEach((book){
        const tiitle = book.firstElementChild.textContent;
        if(tiitle.toLowerCase().indexOf(term)!=-1){
        }else{
            book.style.display = 'none';
        }
    })
})


