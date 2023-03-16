(function () {
    "use strict";
    console.log("reading js");

    const areas = document.querySelectorAll('area');
    const articleimage=document.querySelector('#imagefull');
    const imagefull = document.querySelector('#imagefull img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const closebtn = document.querySelector('.closebtn');

    for (const area of areas) {

        area.addEventListener('mouseover', function () {
            document.getElementById(`${area.id}_th`).className = 'thumbnail showing';
            document.getElementById(`${area.id}_th`).style.cursor = 'pointer';
        })

        document.getElementById(`${area.id}_th`).addEventListener('click', function(event) {
            event.preventDefault();
            openSide();

            // document.getElementById(`${event.target.id}_th`).className = 'thumbnail showing';
           
            // show full image
            imagefull.src = `images/${area.id}_full.png`;
            articleimage.className='showing';
        });

        document.getElementById(`${area.id}_th`).addEventListener('mouseout', function() {
            document.getElementById(`${area.id}_th`).className = 'thumbnail hidden';
        })

        closebtn.addEventListener('click', function(event) {
            event.preventDefault();
            closeSide();

            // document.getElementById(`${area.id}_th`).className = 'thumbnail hidden';

        })
    }

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