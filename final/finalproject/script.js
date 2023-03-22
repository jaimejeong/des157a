(function () {
    "use strict";
    console.log("reading js");

    const areas = document.querySelectorAll('area');
    const articleimage=document.querySelector('#imagefull');
    const imagefull = document.querySelector('#imagefull img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const selects = document.querySelectorAll('.select');
    const closebtn = document.querySelector('.closebtn');
    let newheading = document.querySelector('h2');
    let para = document.querySelector('p');

    // for each area of image map
    for (const area of areas) {

        // when the mouse hover 
        area.addEventListener('mouseover', function () {
            document.getElementById(`${area.id}_th`).className = 'thumbnail showing';
            document.getElementById(`${area.id}_th`).style.cursor = 'pointer';
        })

        document.getElementById(`${area.id}_th`).addEventListener('click', function(event) {
            event.preventDefault();
            openSide();
            // hide all selected thumbnails, queryselectedall
            for (const select of selects) {
                select.className = 'select hidden';
            }
            // show corrected selected thumbnails
            document.getElementById(`${area.id}_sel`).className = 'select showing';
            // document.getElementById(`${event.target.id}_th`).className = 'thumbnail showing';
           
            // show full image
            imagefull.src = `images/${area.id}_full.png`;
            articleimage.className='showing';

            let currentid = `${area.id}_sel`;


            if (currentid == 'grandpa_sel') {
                newheading.innerHTML = 'Grandparents from Busan, South Korea';
                para.innerHTML = "took the train with my mom and visited my grandparents for grandpa's birthday";
            }

            else if (currentid == 'watertower_sel') {
                newheading.innerHTML = 'Watertower on campus';
                para.innerHTML = "this picture is from last winter quarter";
            }

            // add image with selected state, change id
            // document.getElementById(`${area.id}_sel`).className = 'select showing';
            // hide thumbnail, thumbnail hidden
            // document.querySelectorAll(`${area.id}_sel`).className = 'select hidden';
        });

        document.getElementById(`${area.id}_th`).addEventListener('mouseout', function() {
            document.getElementById(`${area.id}_th`).className = 'thumbnail hidden';
        })

        // exiting when clicking the close button
        closebtn.addEventListener('click', function(event) {
            event.preventDefault();
            closeSide();
            // close selected thumbnail
            for (const select of selects) {
                select.className = 'select hidden';
            }
            // document.querySelectorAll(`${area.id}_sel`).className = 'select hidden';
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