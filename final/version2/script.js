(function () {
    "use strict";
    console.log("reading js");

    const areas = document.querySelectorAll('area');
    const articleimage=document.querySelector('#imagefull');
    const imagefull = document.querySelector('#imagefull img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const closebtn = document.querySelector('.closebtn');

    alert("Hello, thank you doing user testing for my Every Picture project!\n\nHere are the three tasks I would like you to perform:\n1. Hover a section that is clickable\n2. Click that section\n3. Exit the side overlay")

    for (const area of areas) {

        // area.addEventListener('mouseover', function () {
        //     document.getElementById('grandpa_th').className = 'thumbnail showing';
        // })


        area.addEventListener('click', function(event) {
            event.preventDefault();
            openSide();

            // document.getElementById(`${event.target.id}_th`).className = 'thumbnail showing';

            document.getElementById('grandpa_th').className = 'thumbnail showing';
           
            // show full image
            imagefull.src = `images/${event.target.id}_full.png`;
            articleimage.className='showing';
        });
    }

    closebtn.addEventListener('click', function(event) {
        event.preventDefault();
        closeSide();
    })

    function openSide() {
        document.getElementById("right").style.width = "500px";
        document.getElementById("left").style.marginRight = "500px";
        // document.getElementById()
    }

    function closeSide() {
        document.getElementById("right").style.width = "0";
        document.getElementById("main").style.marginRight = "0";
        
    }
})();