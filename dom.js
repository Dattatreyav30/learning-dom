// to view the collection of html of everything
// console.dir(document);

console.log(document.domain);
console.log(document.title);
console.log(document.URL);
console.log(document.doctype);
console.log(document.body);
// forms , liks and many more


// selectors
// getelelementbyid
console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title')
console.log(headerTitle);
headerTitle.textContent = 'hello';
headerTitle.innerText = "goodbye";
console.log(headerTitle.textContent);
console.log(headerTitle.innerText); //innertext will listen to styling
let mainHeder = document.getElementById('main-header');
mainHeder.style.borderBottom =  'solid 3px 000'
headerTitle.style.borderBottom = ' solid 3px #000'

// get elelments by class name

let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[0].textContent = 'hello2'
items[0].style.backgroundColor = 'yellow';
items[0].style.fontWeight = 'bold'
// changing calor for all elements;
// items.style.backgroundColor = 'yellow' this dont work bcz of that we need to loop through

for(let i=0; i<items.length;i++){
    items[i].style.backgroundColor = '#f4f4f4'
}

//getelementtagname

let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[0].textContent = 'hello2'
li[0].style.backgroundColor = 'yellow';
li[0].style.fontWeight = 'bold'
// changing calor for all elements;
// li.style.backgroundColor = 'yellow' this dont work bcz of that we need to loop through

for(let i=0; i<li.length;i++){
    li[i].style.backgroundColor = '#f4f4f4'
}

