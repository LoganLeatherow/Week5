let hasMoreVowels = input => {
    let word = input.toLowerCase();
    let vowels =["a", "e", "i", "o", "u"]
    let vowelsCount = 0
    let consonants = 0
    let value = false
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])){
            vowelsCount ++
        }
        else {consonants ++}
    }
        if(vowelsCount > consonants){
            value = true
        }
        if(vowelsCount === consonants){
            value = "They are the same."
        }
        else {
            value = false
        }
    console.log(vowelsCount)
    console.log(consonants)
    console.log(value)
        return
    }


    hasMoreVowels("MoooOO")