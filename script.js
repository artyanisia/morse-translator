window.addEventListener("load", (event) => {

    const morse = {

        'A': '._',
        'B': '_...',
        'C': '_._.',
        'D': '_..',
        'E': '.',
        'F': '.._.',
        'G': '__.',
        'H': '....',
        'I': '..',
        'J': '.___',
        'K': '_._',
        'L': '._..',
        'M': '__',
        'N': '_.',
        'O': '___',
        'P': '.__.',
        'Q': '__._',
        'R': '._.',
        'S': '...',
        'T': '_',
        'U': '.._',
        'V': '..._',
        'W': '.__',
        'X': '_.._',
        'Y': '_.__',
        'Z': '__..',
        /*
        '1': '.____',
        '2': '..___',
        '3': '...__',
        '4': '...._',
        '5': '.....',
        '6': '_....',
        '7': '__...',
        '8': '___..',
        '9': '____.',
        '0': '_____'
        */

    };    

    let string= [];

    const morseButton = document.getElementById("morseButton");
    morseButton.addEventListener('click',() => {

        const morseCode = document.getElementById("morseInput").value;


        const words = morseCode.split('/');

        words.forEach( word => {
            const letters= word.split(' ');;
            for(let i = 0 ; i < letters.length; i++){
                Object.entries(morse).forEach(([key, value]) => {
                    if(value === letters[i]){
                        string.push(key);
                    } 
                })
            }
            string.push(' ');
        })
        const output = document.getElementById("output");
        output.textContent = string.join('');
    })

    const englishButton = document.getElementById("englishButton");
    englishButton.addEventListener('click', () => {
        const sentence = document.getElementById("englishInput").value;


    })
})