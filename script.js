const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const subject_phrases = ["Your zodiac sign suggests", "You possess the qualities of", "You should embrace"];
const descriptor_phrases = ["success in", "adventures in", "challenges related to"];
const feeling_phrases = ["positive energy", "unexpected opportunities", "new relationships", "financial stability"];

const categoryMapping = {
    1: "Career",
    2: "Love",
    3: "Travel",
    4: "Family",
    5: "Finance"
   
};

const categoryPhrases = {
    Career: ["a successful career change", "innovative projects", "leadership roles"],
    Love: ["exciting romantic adventures", "strong and meaningful connections", "harmony in relationships"],
    Travel: ["unexpected journeys", "exploring new cultures", "adventurous experiences"],
    Family: ["bonding moments with family", "supportive family dynamics", "joyful family events"],
    Finance: ["financial abundance", "wise investments", "sustainable wealth"],
   
};

const arrFactory = (arr1, arr2, arr3, category) => {
    let subj = arr1[Math.floor(Math.random() * arr1.length)];
    let descp = arr2[Math.floor(Math.random() * arr2.length)];
    let feel = arr3[Math.floor(Math.random() * arr3.length)];

    let specificCategoryPhrases = categoryPhrases[category];

    let specificPhrase = specificCategoryPhrases[Math.floor(Math.random() * specificCategoryPhrases.length)];

    console.log(`${subj} ${descp} ${feel} in ${category}: Expect ${specificPhrase}.`);
    rl.close();
};

const getUserChoice = () => {
    const categoryOptions = Object.keys(categoryMapping).map(key => `${key}. ${categoryMapping[key]}`).join('\n');
    rl.question(`Choose a category:\n${categoryOptions}\n`, (userChoice) => {
        userChoice = parseInt(userChoice);

        if (userChoice in categoryMapping) {
            let selectedCategory = categoryMapping[userChoice];
            arrFactory(subject_phrases, descriptor_phrases, feeling_phrases, selectedCategory);
        } else {
            console.log("Invalid choice. Defaulting to Career.");
            arrFactory(subject_phrases, descriptor_phrases, feeling_phrases, "Career");
        }
    });
};

getUserChoice();
