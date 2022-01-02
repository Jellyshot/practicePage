'use strict';

function myFunction(){
    let x = document.getElementById("search-txt");

    if(x.style.display === 'none'){
        x.style.display = 'block';
    } else{
        x.style.display = 'none';
    }
} 