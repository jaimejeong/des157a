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
        
        let myText = "";

        myText = `<h3>The cocktail base you choose is ${base}.</h3>`;

        if (base == 'gin') {
            myText += "<p>Let's make a dry martini.</p>";
        }
        else if (base == 'vodka') {
            myText += "<p>Let's make a cosmopolitan.</p>";
        }
        else if (base == 'rum') {
            myText += "<p>Let's make a mojito.</p>";
        }
        else if (base == 'whiskey') {
            myText += "<p>Let's make an old fashioned.</p>";
        }
        else {
            myText += "<p>Let's make a margarita.</p>";
        }
    
        secondpage.innerHTML = myText;

        document.getElementById('second').className = 'showing';
        document.getElementById('input').className = 'hidden';

    })

    second.addEventListener('click', function(event) {
        event.preventDefault();
        const base = document.querySelector('#base').value;
        const color = document.querySelector('#color').value;
        const adjective = document.querySelector('#adjective').value;
        const fruit = document.querySelector('#fruit').value;
        const noun = document.querySelector('#noun').value;


        let firstHeading = "" ;
        let firstList = "";
        let secondHeading = "";
        let secondList = "";
        let myText = "";

        // const heading3 = document.querySelectorAll("#ingredient");
        // const textNode = document.createTextNode("Ingredients");

        // heading3.appendChild(textNode);
        // madlib.appendChild(heading3);
        // heading3.innerHTML = "Ingredients"
        // document.getElementById('#ingredient').appendChild(heading3);

        // gin --> martini
        if (base == 'gin') {
            firstHeading = "<h3>Ingredients</h3>";
            firstList = `<ul><li>3 oz gin</li><li>1 oz dry vermouth</li><li>1 cup of ice cubes</li><li>Chosen fruit, ${fruit}</li></ul>`
            secondHeading = `<h3>${adjective} ${color} Martini Recipe</h3>`;
            secondList = `<ol><li>Combine gin and dry vermouth in a mixing glass with ice.</li><li>Stir until chilled, then strain into a chilled martini glass.</li><li>Garnish with as many ${fruit} as you like.</li></ol>`;

            myText = `<p>Now place your martini on the ${noun} and enjoy your cocktail!</p>`;
        }
        // vodka == cosmopolitan
        else if (base == 'vodka') {
            firstHeading = "<h3>Ingredients</h3>";
            firstList = 
            `<ul>
            <li>1 1/2 oz vodka</li>
            <li>1 oz triple sec, Cointreau</li>
            <li>1/2 oz fresh lime juice</li>
            <li>1/4 cranberry juice</li>
            <li>1 cup of ice cubes</li>
            <li>Chosen fruit, ${fruit}</li>
            </ul>`;

            secondHeading = `<h3>${adjective} ${color} Cosmopolitan Recipe</h3>`;
            secondList = 
            `<ol>
            <li>Combine vodka, triple sec/cointreau, lime juice, and cranberry juice in a cocktail shaker.</li>
            <li>Add ice and shake until well-chilled.</li>
            <li>Strain into a chilled cocktail glass.</li>
            <li>Garnish with as many ${fruit} as you like.</li>
            </ol>`;

            myText = `<p>Now place your cosmopolitan on the ${noun} and enjoy your cocktail!</p>`;
        }
        // rum --> mojito
        else if (base == 'rum') {
            firstHeading = "<h3>Ingredients</h3>";
            firstList = 
            `<ul>
            <li>2 oz white rum</li>
            <li>1/2 oz simple syrup</li>
            <li>1/2 lime</li>
            <li>5-10 mint leaves</li>
            <li>Club soda</li>
            <li>1 cup of ice cubes</li>
            <li>Chosen fruit, ${fruit}</li>
            </ul>`;

            secondHeading = `<h3>${adjective} ${color} Mojito Recipe</h3>`;
            secondList = 
            `<ol>
            <li>Place mint leaves and 2 lime wedges (1/4 of a lime) to a highball glass and gently muddle them.</li>
            <li>Add the 2 remaining lime wedges and the simple syrup and gently muddle again.</li>
            <li>Fill the glass with ice. Pour the rum over ice and then top with club soda.</li>
            <li>Stir gently and garnish with as many ${fruit} as you like.</li>
            </ol>`;

            myText = `<p>Now place your mojito on the ${noun} and enjoy your cocktail!</p>`;
        }
        // whiskey --> old fashioned
        else if (base == 'whiskey') {
            firstHeading = "<h3>Ingredients</h3>";
            firstList = 
            `<ul>
            <li>2 oz bourbon whiskey</li>
            <li>1 teaspoon simple syrup or sugar</li>
            <li>1 teaspoon water</li>
            <li>3 dashes Angostura bitters</li>
            <li>1 cup of ice cubes</li>
            <li>Chosen fruit, ${fruit}</li>
            </ul>`;

            secondHeading = `<h3>${adjective} ${color} Old Fashioned Recipe</h3>`;
            secondList = 
            `<ol>
            <li>Combine simple syrup/sugar, water, and bitters into a rocks glass and stir gently.</li>
            <li>Add large ice cubes and pour in bourbon.</li>
            <li>Stir until chilled, then garnish with as many ${fruit} as you like.</li>
            </ol>`;

            myText = `<p>Now place your old fashioned on the ${noun} and enjoy your cocktail!</p>`;
        }
        // tequila --> margarita
        else {
            firstHeading = "<h3>Ingredients</h3>";
            firstList = 
            `<ul>
            <li>2 oz blanco tequila</li>
            <li>1 oz fresh lime juice</li>
            <li>1/2 oz triple sec, Cointreau</li>
            <li>Salt for rim</li>
            <li>1 cup of ice cubes</li>
            <li>Chosen fruit, ${fruit}</li>
            </ul>`;

            secondHeading = `<h3>${adjective} ${color} Margarita Recipe</h3>`;
            secondList = 
            `<ol>
            <li>Prep the glass by running a juicy lime wedge around the rim and then dipping the rim in salt.</li>
            <li>Fill a cocktail shaker with ice. Add tequila, lime juice, and triple sec/Cointreau.</li>
            <li>Shake until mixed and chilled.</li>
            <li>Place some ice cubes in the glass and strain the mixture over the ice.</li>
            <li>Garnish with as many ${fruit} as you like.</li>
            </ol>`;

            myText = `<p>Now place your margarita on the ${noun} and enjoy your cocktail!</p>`;
        }

        madlib.innerHTML = firstHeading + firstList + secondHeading + secondList + myText;

        document.getElementById('output').className = 'showing';
        document.getElementById('second').className = 'hidden';
    })

}())