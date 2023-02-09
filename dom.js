// to view the collection of html of everything
// console.dir(document);

// console.log(document.domain);
// console.log(document.title);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.body);
// forms , liks and many more


// selectors
// getelelementbyid
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title')
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = "goodbye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText); //innertext will listen to styling
// let mainHeder = document.getElementById('main-header');
// mainHeder.style.borderBottom =  'solid 3px 000'
// headerTitle.style.borderBottom = ' solid 3px #000'

// // get elelments by class name

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// items[0].textContent = 'hello2'
// items[0].style.backgroundColor = 'yellow';
// items[0].style.fontWeight = 'bold'
// // changing calor for all elements;
// // items.style.backgroundColor = 'yellow' this dont work bcz of that we need to loop through

// for(let i=0; i<items.length;i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// //getelementtagname

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
// li[0].textContent = 'hello2'
// li[0].style.backgroundColor = 'yellow';
// li[0].style.fontWeight = 'bold'
// // changing calor for all elements;
// // li.style.backgroundColor = 'yellow' this dont work bcz of that we need to loop through

// for(let i=0; i<li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4'
// }


// query selecter
// let header = document.querySelector('#main-header');
// header.style.borderBottom ="solid 4px #ccc";

// let seconditem= document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green'

// let thirditem= document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display ='none'

// //querselectorall

// let secondItem = document.querySelectorAll('.list-group-item');
// secondItem[1].style.color = 'green';

// //making odd

// let odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green'
// }

//Traversing through dom

// parentNode
// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode);

// //parentElement
// let itemList2 = document.querySelector('#items');
// console.log(itemList2.parentElement);
// console.log(itemList2.parentElement.parentElement);

// // childnodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

// // siblings
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// // creating new textnode
// // create a div
// let newDiv = document.createElement('div');

// // add class
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'hello1';

// // add attribute
// newDiv.setAttribute('title','Hellodiv');

// // create content
// let newDivText = document.createTextNode('hello world');

// // adding text
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1)
// console.log(newDiv);

// //adding ehllo world before item1
// let ul = document.querySelector('div ul')
// console.log(ul);

// let li = document.querySelector('ul li');
// console.log(li);

// ul.insertBefore(newDiv,li);
// console.log(itemList2.parentElement);

// adding and deleting tags

//getting form element to add event
let form = document.getElementById('addForm');

// list of li tag 
let itemList = document.getElementById('items');

// adding event listner when submit is clicked
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem)
function addItem(e) {
    e.preventDefault();
    // storing typed value inside input
    let newItem = document.getElementById('item').value;

    // creating new li tag
    let li = document.createElement('li');

    // adding same class name to newly created li tag
    li.className = 'list-group-item';

    // adding input text to li tag
    li.appendChild(document.createTextNode(newItem));

    // creating delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // appending X into delete button by creating it
    deleteBtn.appendChild(document.createTextNode('X'));

    // finally adding to li tag
    li.appendChild(deleteBtn);

    let editButton = document.createElement('button');
    editButton.className = 'btn-danger float-right';
    editButton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editButton);


    // adding li tag to newlist
    itemList.appendChild(li);

}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// creating edit button