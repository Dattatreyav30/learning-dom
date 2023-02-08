// to view the collection of html of everything
// console.dir(document);

console.log(document.domain);
console.log(document.title);
console.log(document.URL);
console.log(document.doctype);
console.log(document.body);
//forms , liks and many more


//selectors
// getelelementbyid
// console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title')
console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = "goodbye";
console.log(headerTitle.textContent);
console.log(headerTitle.innerText); //innertext will listen to styling
let mainHeder = document.getElementById('main-header');
mainHeder.style.borderBottom =  'solid 3px 000'
headerTitle.style.borderBottom = ' solid 3px #000'