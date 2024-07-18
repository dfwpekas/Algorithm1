function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
    let isWord = false;
    
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        // Increment the length counter for each character
        lengthCounter++;
        
        // Count vowels
        if (vowels.has(char)) {
            vowelCounter++;
        }
        
        // Count words
        if (char !== ' ' && char !== '.') {
            isWord = true;
        } else if ((char === ' ' || char === '.') && isWord) {
            wordCounter++;
            isWord = false;
        }
    }
    
    // Log the results
    console.log(`Length of the sentence: ${lengthCounter}`);
    console.log(`Number of words: ${wordCounter}`);
    console.log(`Number of vowels: ${vowelCounter}`);
}

// Example usage
const sentence = "aeiouuuu, I am a vowel sound";
analyzeSentence(sentence);
