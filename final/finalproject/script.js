(function () {
    "use strict";
    console.log("reading js");

    const areas = document.querySelectorAll('area');
    const articleimage=document.querySelector('#imagefull');
    const imagefull = document.querySelector('#imagefull img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    // add querySeletorAll for selected thumbnails
    const closebtn = document.querySelector('.closebtn');

    for (const area of areas) {

        area.addEventListener('mouseover', function () {
            document.getElementById(`${area.id}_th`).className = 'thumbnail showing';
            document.getElementById(`${area.id}_th`).style.cursor = 'pointer';
        })

        document.getElementById(`${area.id}_th`).addEventListener('click', function(event) {
            event.preventDefault();
            openSide();
            // hide all selected thumbnails, queryselectedall

            // show corrected selected thumbnails

            // document.getElementById(`${event.target.id}_th`).className = 'thumbnail showing';
           
            // show full image
            imagefull.src = `images/${area.id}_full.png`;
            articleimage.className='showing';

            // add image with selected state, change id
            // document.getElementById(`${area.id}_sel`).className = 'thumbnail showing';
            // hide thumbnail, thumbnail hidden

        });

        document.getElementById(`${area.id}_th`).addEventListener('mouseout', function() {
            document.getElementById(`${area.id}_th`).className = 'thumbnail hidden';
        })

        closebtn.addEventListener('click', function(event) {
            event.preventDefault();
            closeSide();
            // close selected thumbnail

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
        document.getElementById("left").style.marginRight = "0";
        
    }
})();