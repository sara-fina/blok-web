/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/



var statusHartjeicoon;
statusHartjeicoon= 'leeg';
var hartjeicoon = document.querySelector('img#hartje');
console.log(hartjeicoon);

hartjeicoon.alt = 'hartje';
hartjeicoon.src = 'fotos/hartjeicon.png';

function Hartje() {
    if (statusHartjeicoon == 'leeg')

    {
        hartjeicoon.src = 'fotos/hartjeicon.png';
        statusHartjeicoon = 'vol';
        hartjeicoon.alt= 'vol';
    }
    else{
        hartjeicoon.src = 'fotos/hartje2.png';
        statusHartjeicoon = 'leeg';
        hartjeicoon.alt = 'leeg';
    
    }
    
}

hartjeicoon.addEventListener('click', Hartje);

