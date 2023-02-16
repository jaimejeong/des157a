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

        myText = `<h3>The cocktail base you choose is <span class="inputStyle">${base}</span>.</h3>`;

        if (base == 'gin') {
            myText += "<p>Let's make a <span class='cocktailName'>dry martini</span>.</p>";
        }
        else if (base == 'vodka') {
            myText += "<p>Let's make a <span class='cocktailName'>cosmopolitan</span>.</p>";
        }
        else if (base == 'rum') {
            myText += "<p>Let's make a <span class='cocktailName'>mojito</span>.</p>";
        }
        else if (base == 'whiskey') {
            myText += "<p>Let's make an <span class='cocktailName'>old fashioned</span>.</p>";
        }
        else {
            myText += "<p>Let's make a <span class='cocktailName'>margarita</span>.</p>";
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
            firstList = `<ul><li>3 oz <span class='inputStyle'>gin</span></li><li>1 oz dry vermouth</li><li>1 cup of ice cubes</li><li>Chosen fruit, <span class='inputStyle'>${fruit}</span></li></ul>`
            secondHeading = `<h3><span class='inputStyle'>${adjective} ${color}</span> <span class='cocktailName'>Martini</span> Recipe</h3>`;
            secondList = `<ol><li>Combine <span class='inputStyle'>gin</span> and dry vermouth in a mixing glass with ice.</li><li>Stir until chilled, then strain into a chilled martini glass.</li><li>Garnish with as many <span class='inputStyle'>${fruit}</span> as you like.</li></ol>`;

            myText = `<p>Now place your <span class='cocktailName'>martini</span> on the <span class='inputStyle'>${noun}</span> and enjoy your cocktail!</p>`;
        }
        // vodka == cosmopolitan
        else if (base == 'vodka') {
            firstHeading = "<h3>Ingredients</h3>";
            firstList = 
            `<ul>
            <li>1 1/2 oz <span class='inputStyle'>vodka</span></li>
            <li>1 oz triple sec, Cointreau</li>
            <li>1/2 oz fresh lime juice</li>
            <li>1/4 cranberry juice</li>
            <li>1 cup of ice cubes</li>
            <li>Chosen fruit, <span class='inputStyle'>${fruit}</span></li>
            </ul>`;

            secondHeading = `<h3><span class='inputStyle'>${adjective} ${color}</span> <span class='cocktailName'>Cosmopolitan</span> Recipe</h3>`;
            secondList = 
            `<ol>
            <li>Combine <span class='inputStyle'>vodka</span>, triple sec/cointreau, lime juice, and cranberry juice in a cocktail shaker.</li>
            <li>Add ice and shake until well-chilled.</li>
            <li>Strain into a chilled cocktail glass.</li>
            <li>Garnish with as many <span class='inputStyle'>${fruit}</span> as you like.</li>
            </ol>`;

            myText = `<p>Now place your <span class='cocktailName'>cosmopolitan</span> on the <span class='inputStyle'>${noun}</span> and enjoy your cocktail!</p>`;
        }
        // rum --> mojito
        else if (base == 'rum') {
            firstHeading = "<h3>Ingredients</h3>";
            firstList = 
            `<ul>
            <li>2 oz white <<span class='inputStyle'>rum</span></li>
            <li>1/2 oz simple syrup</li>
            <li>1/2 lime</li>
            <li>5-10 mint leaves</li>
            <li>Club soda</li>
            <li>1 cup of ice cubes</li>
            <li>Chosen fruit, <span class='inputStyle'>${fruit}</span></li>
            </ul>`;

            secondHeading = `<h3><span class='inputStyle'>${adjective} ${color}</span> <span class='cocktailName'>Mojito</span> Recipe</h3>`;
            secondList = 
            `<ol>
            <li>Place mint leaves and 2 lime wedges (1/4 of a lime) to a highball glass and gently muddle them.</li>
            <li>Add the 2 remaining lime wedges and the simple syrup and gently muddle again.</li>
            <li>Fill the glass with ice. Pour the <span class='inputStyle'>rum</span> over ice and then top with club soda.</li>
            <li>Stir gently and garnish with as many <span class='inputStyle'>${fruit}</span> as you like.</li>
            </ol>`;

            myText = `<p>Now place your <span class='cocktailName'>mojito</span> on the <span class='inputStyle'>${noun}</span> and enjoy your cocktail!</p>`;
        }
        // whiskey --> old fashioned
        else if (base == 'whiskey') {
            firstHeading = "<h3>Ingredients</h3>";
            firstList = 
            `<ul>
            <li>2 oz bourbon <span class='inputStyle'>whiskey</span></li>
            <li>1 teaspoon simple syrup or sugar</li>
            <li>1 teaspoon water</li>
            <li>3 dashes Angostura bitters</li>
            <li>1 cup of ice cubes</li>
            <li>Chosen fruit, <span class='inputStyle'>${fruit}</span></li>
            </ul>`;

            secondHeading = `<h3><span class='inputStyle'>${adjective} ${color}</span> <span class='cocktailName'>Old Fashioned</span> Recipe</h3>`;
            secondList = 
            `<ol>
            <li>Combine simple syrup/sugar, water, and bitters into a rocks glass and stir gently.</li>
            <li>Add large ice cubes and pour in bourbon <span class='inputStyle'>whiskey</span>.</li>
            <li>Stir until chilled, then garnish with as many <span class='inputStyle'>${fruit}</span> as you like.</li>
            </ol>`;

            myText = `<p>Now place your <span class='cocktailName'>old fashioned</span> on the <span class='inputStyle'>${noun}</span> and enjoy your cocktail!</p>`;
        }
        // tequila --> margarita
        else {
            firstHeading = "<h3>Ingredients</h3>";
            firstList = 
            `<ul>
            <li>2 oz blanco <span class='inputStyle'>tequila</span></li>
            <li>1 oz fresh lime juice</li>
            <li>1/2 oz triple sec, Cointreau</li>
            <li>Salt for rim</li>
            <li>1 cup of ice cubes</li>
            <li>Chosen fruit, <span class='inputStyle'>${fruit}</span></li>
            </ul>`;

            secondHeading = `<h3><span class='inputStyle'>${adjective} ${color}</span> <span class='cocktailName'>Margarita</span> Recipe</h3>`;
            secondList = 
            `<ol>
            <li>Prep the glass by running a juicy lime wedge around the rim and then dipping the rim in salt.</li>
            <li>Fill a cocktail shaker with ice. Add <span class='inputStyle'>tequila</span>, lime juice, and triple sec/Cointreau.</li>
            <li>Shake until mixed and chilled.</li>
            <li>Place some ice cubes in the glass and strain the mixture over the ice.</li>
            <li>Garnish with as many <span class='inputStyle'>${fruit}</span> as you like.</li>
            </ol>`;

            myText = `<p>Now place your <span class='cocktailName'>margarita</span> on the <span class='inputStyle'>${noun}</span> and enjoy your cocktail!</p>`;
        }

        madlib.innerHTML = firstHeading + firstList + secondHeading + secondList + myText;

        document.getElementById('output').className = 'showing';
        document.getElementById('second').className = 'hidden';
    })

}())