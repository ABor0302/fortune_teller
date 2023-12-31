const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const subject_phrases = ["Your zodiac sign suggests", "You possess the qualities of", "You should embrace"];
const descriptor_phrases = ["success in", "adventures in", "challenges related to"];
const feeling_phrases = ["positive energy", "unexpected opportunities", "new relationships", "financial stability"];

const career_phrases = ["a successful career change", "innovative projects", "leadership roles"];
const love_phrases = ["exciting romantic adventures", "strong and meaningful connections", "harmony in relationships"];
const travel_phrases = ["unexpected journeys", "exploring new cultures", "adventurous experiences"];
const family_phrases = ["bonding moments with family", "supportive family dynamics", "joyful family events"];
const finance_phrases = ["financial abundance", "wise investments", "sustainable wealth"];

const getUserChoice = () => {
    const categories = ["Career", "Love", "Travel", "Family", "Finance"];
    
    rl.question(`Choose a category: ${categories.join(", ")} `, (userChoice) => {
        userChoice = userChoice.trim().toLowerCase();
        if (categories.includes(userChoice)) {
            arrFactory(subject_phrases, descriptor_phrases, feeling_phrases, userChoice);
        } else {
            console.log("Invalid category. Defaulting to Career.");
            arrFactory(subject_phrases, descriptor_phrases, feeling_phrases, "Career");
        }
        rl.close();
    });
};

const arrFactory = (arr1, arr2, arr3, category) => {
    let subj = arr1[Math.floor(Math.random() * arr1.length)];
    let descp = arr2[Math.floor(Math.random() * arr2.length)];
    let feel = arr3[Math.floor(Math.random() * arr3.length)];

    let specificCategoryPhrases = [];
    switch (category) {
        case "Career":
            specificCategoryPhrases = career_phrases;
            break;
        case "Love":
            specificCategoryPhrases = love_phrases;
            break;
        case "Travel":
            specificCategoryPhrases = travel_phrases;
            break;
        case "Family":
            specificCategoryPhrases = family_phrases;
            break;
        case "Finance":
            specificCategoryPhrases = finance_phrases;
            break;
        default:
            break;
    }

    let specificPhrase = specificCategoryPhrases[Math.floor(Math.random() * specificCategoryPhrases.length)];

    console.log(`${subj} ${descp} ${feel} in ${category}: Expect ${specificPhrase}.`);
};

getUserChoice();
