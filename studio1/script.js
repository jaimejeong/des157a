(function () {
    "use strict";
    console.log('reading js');

    const myForm = document.querySelector('#myForm');
    const second = document.querySelector('#second');
    const secondpage = document.querySelector('#secondpage');
    const madlib = document.querySelector('#madlib');


    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const base = document.querySelector('#base').value;
        const color = document.querySelector('#color').value;
        const adjective = document.querySelector('#adjective').value;
        const fruit = document.querySelector('#fruit').value;
        const noun = document.querySelector('#noun').value;

        // base.style.color = "orange";
        // base.className = input;
        // color.className = input;
        // adjective.className = input;
        // fruit.className = input;
        // noun.className = input;

        // const eachInput = myForm.getElementsByClassName("input");
        // for (const i = 0; i < myForm; i++) {
        //     eachInput[i].style.color = green;
        // }


        // const myText = `base: ${base} color: ${color}`;
        let myText;

        myText = `<h3>The cocktail base you choose is ${base}.</h3>`;
        // myText.getElementById(base).style.color = 'orange';
        if (base == 'gin') {
            myText += "<p>Let's make a dry martini.</p>";
        }
        else if (base == 'vodka') {
            myText += "<p>Let's make a cosmopolitan.</p>";
        }
        else if (base == 'rum') {
            myText += "<p>Let's make a mojito.</p>";
        }
        else {
            myText += "<p>Let's make an old fashioned</p>"
        }
        // myText+= `${color} ${adjective} ${fruit} ${noun}`
        secondpage.innerHTML = myText;
    })

    second.addEventListener('button', function(event) {
        event.preventDefault();

        let myText;

        if (base == 'gin') {
            myText = `<p>Your martini is going to be ${color} and ${adjective}. For this you will need 3 ounces of ${base}, 1 ounce of dry vermouth, 1 cup of ice cubes, and your chosen fruit, ${fruit}`;
        }

        madlib.innerHTML = myText;

    })

    // const submitButton = document.querySelectorAll('input[type=submit]');

    document.querySelector('#send-form').addEventListener('click', function(event) {
        event.preventDefault;
        document.getElementById('second').className = 'showing';
        document.getElementById('input').className = 'hidden';
    })


    document.querySelector('#recipebutton').addEventListener('click', function(event) {
        event.preventDefault;
        document.getElementById('output').className = 'showing';
        document.getElementById('second').className = 'hidden';
        console.log("what is wrong");
    })


}())