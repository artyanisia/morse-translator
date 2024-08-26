window.addEventListener("load", (event) => {

    const morse = new Map([

        ['A', '._'],    
        ['B', '_...'],    
        ['C', '_._.'],    
        ['D', '_..'],    
        ['E', '.'],    
        ['F', '.._.'],
        ['G', '__.'],
        ['H', '....'],
        ['I', '..'],
        ['J', '.___'],
        ['K', '_._'],
        ['L', '._..'],
        ['M', '__'],
        ['N', '_.'],
        ['O', '___'],
        ['P', '.__.'],
        ['Q', '__._'],
        ['R', '._.'],
        ['S', '...'],
        ['T', '_'],
        ['U', '.._'],
        ['V', '..._'],
        ['W', '.__'],
        ['X', '_.._'],
        ['Y', '_.__'],
        ['Z', '__..'],
        ['1', '.____'],
        ['2', '..___'],
        ['3', '...__'],
        ['4', '...._'],
        ['5', '.....'],
        ['6', '_....'],
        ['7', '__...'],
        ['8', '___..'],
        ['9', '____.'],
        ['0', '_____'],
        ['.', '._._._'],
        [',', '__..__'],
        ['?', '..__..'],
        ["'", '.____.'],
        ['!', '_._.__'],
        ['(', '_.__.'],
        [')', '_.__.)'],
        ['&', '._...'],
        [':', '___...'],    
        [';', '_._._;'],    
        ['=', '_..._'],    
        ['+', '._._.'],    
        ['-', '_...._'],    
        ['_', '..__._'],    
        ['"', '._.._.'],    
        ['@', '.__._.']
    
    ]);

    let reverseMorse = new Map();

for (let [key, value] of morse.entries()) {
    reverseMorse.set(value, key);
}
    let result= [];

    const morseButton = document.getElementById("morseButton");

    morseButton.addEventListener('click',() => {
        result = [];
        let morseCode = document.getElementById("morseInput").value;
        let output = document.getElementById("output");

        morseCode = morseCode.replaceAll('-','_');
        const morseSentence = morseCode.split('/');

        morseSentence.forEach( morseWord => {
            const symbols= morseWord.split(' ');
            for(let i = 0 ; i < symbols.length; i++){
                var letter = reverseMorse.get(symbols[i]);
                if (letter) {
                    result.push(letter);
                }
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
                var code = morse.get(letter);
                if (code) {
                    result.push(code);
                }
                result.push(' ');
            });
            result.push('/');
        });

        morseInput.value = '';
        output.textContent = '';
        output.textContent = result.join('');
    })
})