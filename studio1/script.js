(function() {
    "use strict";
    console.log('reading js');

    const myForm = document.querySelector('#myForm');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const base = document.querySelector('#base').value;
        const color = document.querySelector('#color').value;
        const adjective = document.querySelector('#adjective').value;
        const fruit = document.querySelector('#fruit').value;
        const noun = document.querySelector('#noun').value;


        // const myText = `base: ${base} color: ${color}`;
        let myText;

        myText = `The cocktail base you choose is ${base}`;
        if (base == 'gin') {
            myText += `Let's make a classic martini`;
        }
        else if (base == 'vodka') {
            myText = "vodka is nasty";
        }
        madlib.innerHTML = myText;
    })

    // const submitButton = document.querySelectorAll('input[type=submit]');

    document.querySelector('#send-form').addEventListener('click', function(event) {
        event.preventDefault;
        document.getElementById('output').className = 'showing';
    } )

    document.querySelector('#send-form').addEventListener('click', function(event) {
        event.preventDefault;
        document.getElementById('input').className = 'hidden';
    })

}())