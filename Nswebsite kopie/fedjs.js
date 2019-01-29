/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var zoekVerhaal = document.querySelector('.uitklap');



var form = document.querySelector('.formuitklap');


//console.log(formulier);

function openUitklap() { form.classList.toggle('active');

}

zoekVerhaal.addEventListener('click', openUitklap);





