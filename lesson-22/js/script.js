let fifthTitle = document.getElementsByTagName('h5');
let documentHTML = document.documentElement;
let documentBody = document.body;
let documentHead = document.head;
let documentBodyChildNodes = document.body.childNodes;
let documentBodyFirstChild = document.body.firstChild;
let documentBodyLastChild = document.body.lastChild;
console.log(documentBodyLastChild);
for (value of documentBodyChildNodes) {
console.log(value)
}
let documentBodyChildNodesArray = Array.from(document.body.childNodes);
let documentBodyParentNode = document.body.parentNode;
let documentHeadNextSibling = document.head.nextSibling;
let documentBodyPreviousSibling = document.body.previousSibling;
let documentBodyChildren = document.body.children;
let documentBodyFirstElementChild = document.body.firstElementChild;
let documentBodyLastElementChild = document.body.lastElementChild;
let documentHeadNextElementSibling = document.head.nextElementSibling;
let documentBodyPreviousElementSibling = document.body.previousElementSibling;
let documentGetElementByIdThird = document.getElementById('third');
let documentGetElementByIdHeadingTwo = document.getElementById('headingTwo');
let documentQuerySelectorAll = document.querySelectorAll('button');
let documentQuerySelector = document.querySelector('button');
let documentGetElementsByTagName = document.getElementsByTagName('h2');
let documentGetElementsByClassName = document.getElementsByClassName('card');
let documentGetElementsByName = document.getElementsByName('viewport');
let documentQuerySelectorInnerHTML = document.querySelector('.form-check-label').innerHTML;
let documentQuerySelectorOuterHTML = document.querySelector('.form-check-label').outerHTML;
let documentBodyQuerySelectorTextContent = document.body.querySelector('.card-body').textContent;
let hiddenElement = document.body.querySelector('h1').hidden;
let hrefElement = document.body.querySelector('.nav-link').href;
let idElement = document.body.querySelector('#second').id;
let hasAttributeCharset = document.querySelector('meta');
console.log(hasAttributeCharset.hasAttribute('charset'));
let getAttributeCharset = document.querySelector('meta');
console.log(getAttributeCharset.getAttribute('charset'));
let setAttributeTarget = document.body.querySelector('#set');
setAttributeTarget.setAttribute('target', '_blank');
let removeAttributeRem = document.body.querySelector('#rem');
removeAttributeRem.removeAttribute('title');
let getElementDataset = document.body.querySelector('#rem');
console.log(getElementDataset.dataset.info);
let newEl = document.createElement('iframe');
let addNewElNode = document.body.querySelector('#second');
addNewElNode.append(newEl);
addNewElNode.prepend(newEl);
addNewElNode.before(newEl);
addNewElNode.after(newEl);
let replaceEl = document.createElement('div');
addNewElNode.replaceWith(replaceEl);
replaceEl.remove();
let elemClassName = document.body.querySelector('#className');
elemClassName.className = 'col-12';
elemClassName.classList.add('elem');
elemClassName.classList.remove('mt-5');
elemClassName.classList.toggle('elem1');
elemClassName.classList.toggle('elem');
console.log(elemClassName.classList.contains('text-center'));
let elemStyleH1 = document.querySelector('h1');
elemStyleH1.style.backgroundColor = 'red';
let elemStyleH4 = document.querySelector('#second h4');
elemStyleH4.style.color = 'limegreen';
let elemStyleH4P = document.querySelector('#second p');
elemStyleH4P.style.color = 'blue';
let evList = document.querySelector('#firstName');
evList.addEventListener('focus', () => {
  let elemPlaceholder = document.querySelector('#firstName').hasAttribute('placeholder');
  if (elemPlaceholder === true) {
    document.querySelector('#firstName').removeAttribute('placeholder');
  } else {
    console.log(elemPlaceholder)
  }
});




