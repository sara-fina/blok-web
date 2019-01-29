/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var download = document.querySelector('img[alt=downloadengif]');



function downloaden() {

    download.src = "fotos/gif31.gif";
}

download.addEventListener ('click', downloaden);



var downloadGetal = document.querySelector('img[alt=icondownload]');

function addDownload(){

  downloadGetal.src = "fotos/gifje41.gif";
}

download.addEventListener ('click', addDownload);


var ster = document.querySelector('img[alt=sterretjeicoon]');



function sterren() {

    ster.src = "fotos/gif5.gif";
}

ster.addEventListener ('click', sterren);


var sterGetal = document.querySelector('img[alt=icon]');

function addSterren(){

  sterGetal.src = "fotos/gif61.gif";
}

ster.addEventListener ('click', addSterren);
