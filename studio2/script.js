(function () {
    "use strict";
    console.log("reading js");

    const areas = document.querySelectorAll('area');
    const articleimage=document.querySelector('#imagefull');
    const imagefull = document.querySelector('#imagefull img');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // for each thumbnail add an event listenter
    for (const area of areas) {
        // for mouse style to change when hover
        // why is it the cursor not changing?!?!
        area.addEventListener('mouseover', function() {
            // console.log("mouse is over the thumbnail!");
        })
        
        area.addEventListener('click', function(event){
            // don't jump to the top because I clicked
            event.preventDefault();

            // find out the id (id) of the target HTML element (target) that registered this event (event)
            // console.log(event.target.id);
    
            // hide all thumbnails
            for (const thumbnail of thumbnails){
                thumbnail.className='thumbnail hidden';
            }
            // show this thubmnail
            document.getElementById(`${event.target.id}_th`).className = 'thumbnail showing';
           
            // show full image
            imagefull.src = `images/${event.target.id}_full.png`;
            articleimage.className='showing';
        })

    }

})();