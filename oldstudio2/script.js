(function () {
    "use strict";
    console.log("reading js");

    const p = document.querySelector('p');
    let html = "";

    document.addEventListener('mousemove', reportPos);

    function reportPos(event) {
        const xPos = event.clientX;
        const yPos = event.clientY;
            
        html = `The mouse is ${xPos} pixels from the left and ${yPos} pixels from the top`;
        p.innerHTML = html;
    }

    // const container = document.querySelector('#container');
    const davisdiv = document.querySelector('#davis');
    const seouldiv = document.querySelector('#seoul');

    // const alldivs = [davisdiv, seouldiv];

    // for (let i = 0; i < alldivs.length; i++) {
    //     alldivs[i].addEventListener('click', function(event) {
    //         event.preventDefault();
    //         alldivs[i].querySelector('article').className = 'hidden';
    //         alldivs[i].getElementById(alldivs[i]).className = 'showing';
    //     })
    // }

    // davisdiv.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.querySelector('article').className = 'hidden';
    //     document.getElementById('davispic').className = 'showing';
    
    // })

    // seouldiv.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.querySelector('article').className = 'hidden';
    //     document.getElementById('seoulpic').className = 'showing';
    // })

})();