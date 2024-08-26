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
        '1': '.____',
        '2': '..___',
        '3': '...__',
        '4': '...._',
        '5': '.....',
        '6': '_....',
        '7': '__...',
        '8': '___..',
        '9': '____.',
        '0': '_____',
        '.': '._._._',
        ',': '__..__',
        '?': '..__..',
        "'": '.____.',
        '!': '_._.__',
        '(': '_.__.',
        ')': '_.__.)',
        '&': '._...',
        ':': '___...',
        ';': '_._._;',
        '=': '_..._',
        '+': '._._.',
        '-': '_...._',
        '_': '..__._',
        '"': '._.._.',
        '@': '.__._.'

    };    

    let result= [];

    const morseButton = document.getElementById("morseButton");

    morseButton.addEventListener('click',() => {

        let morseCode = document.getElementById("morseInput").value;
        let output = document.getElementById("output");

        morseCode = morseCode.replaceAll('-','_');
        const morseSentence = morseCode.split('/');

        morseSentence.forEach( morseWord => {
            const symbols= morseWord.split(' ');
            for(let i = 0 ; i < symbols.length; i++){
                Object.entries(morse).forEach(([key, value]) => {
                    if(value === symbols[i]){
                        result.push(key);
                    } 
                })
            }
            result.push(' ');
        })

        englishInput.value = '';
        output.textContent = '';
        output.textContent = result.join('');
    })

    const englishButton = document.getElementById("englishButton");

    englishButton.addEventListener('click', () => {

        result = [];
        let englishPhrase = document.getElementById("englishInput").value.toUpperCase();
        let words = englishPhrase.trim().split(' ');

        words.forEach(word =>{
            word.split('').forEach(letter => {
                Object.entries(morse).forEach(([key, value]) => {
                    if(key === letter){
                        result.push(value);
                    } 
                });
                result.push(' ');
            });
            result.push('/');
        });

        morseInput.value = '';
        output.textContent = '';
        output.textContent = result.join('');
    })
})