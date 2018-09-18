import _ from 'lodash';
import './style.css';

const arr = [
    {name: "re"},
    {name: "qw"},
    {name: "cvcv"},
];

function component() {

    let element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.className = 'el';


    let ul = document.createElement('ul');
    arr.forEach(el => {
        ul.innerHTML += `<li>name: ${el.name}</li>`;
    });
    element.appendChild(ul);

    return element;
}

document.body.appendChild(component());


console.log('webpack');
console.dir('upd');

if (module.hot) {
    console.log('hot reload ')
}