//Fortune-Teller
console.log("Hello world");
const subject_phrases = ["Your sign is","You are","You should"];
const descriptor_pharese =["having", "experiencing", "encountering"];
const feeling_phrases = ["good luck", "bad luck", "unexpected challenges", "a fortunate turn of events"]
 const arrFactory = (arr1,arr2,arr3) => {
    let subj = arr1[Math.floor(Math.random() * arr1.length)];
    let descp = arr2[Math.floor(Math.random() * arr2.length)];
    let feel = arr3[Math.floor(Math.random() * arr3.length)];
    return subj + " " + descp + " " + feel;
 }

console.log(arrFactory(subject_phrases,descriptor_pharese,feeling_phrases));
 arrFactory(subject_phrases,descriptor_pharese,feeling_phrases);