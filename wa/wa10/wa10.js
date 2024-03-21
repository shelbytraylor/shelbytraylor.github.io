// const customName = document.getElementById(`customname`);
// const randomize = document.querySelector(`.randomize`);
// const story = document.querySelector(`.story`);

// function randomValueFromArray(array){
//     const random = Math.floor(Math.random()* array.length);
//     return array[random];
// }

// const storyText = ['It was 75 farhenheit outside and sunny, so :insertx: went for a walk. When they got to :inserty:, they smiled in bliss, then :insertz:. Some strangers saw the whole thing, but she didn't mind this was the best day of her life.'];
// const insertx = ['Shelby and her best friends', 'Shelby and her mom', 'Shelby and her puppy'];
// const inserty = ['the beach', 'the coffeshop', 'the yoga studio'];
// const insertz = ['passed away due to pure happiness', 'jumped up and down in excitement', 'hugged someone'];

// randomize.addEventListener(`click`, result);

// function result() {
//     let newStory = storyText;
//     const xItem = randomValueFromArray(insertx);
//     const yItem = randomValueFromArray(inserty);
//     const zItem = randomValueFromArray(insertz);

//     newStory = newStory.replaceAll(':insertx:', xItem);
//     newStory = newStory.replaceAll(':inserty:', yItem);
//     newStory = newStory.replaceAll(':insertz:', zItem);

//     if(customName.value !== '') {
//         const name = customName.value;
//         newStory = newStory.replaceAll('Bob', name);
//     }

//     if(document.getElementById("uk").checked) {
//         const weight = `${Math.round(300*0.0714286)} stone`;
//         const temperature = `${Math.round((94-32)*5/9)} centigrade`;
//         newStory = newStory.replaceAll('94 farhenheit', temperature);
//         newStory = newStory.replaceAll('300 pounds', weight);
//     }
    
//     story.textContent = newStory;
//     story.style.visibility = 'visible';
// }

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

var storyText = "It was 75 farhenheit outside and sunny, so :insertx: went for a walk. When they got to :inserty:, they smiled in bliss, then :insertz:. Some strangers saw the whole thing, including Josie, but she didn't mind this was the best day of her life.";
var insertX = ["Shelby and her best friends", "Shelby and her mom", "Shelby and her puppy"];
var insertY = ["the beach", "the coffeshop", "the yoga studio"];
var insertZ = ["passed away due to pure happiness", "jumped up and down in excitement", "hugged someone"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll("Josie", name); 
    }

    // if (document.getElementById('uk').checked) {
    //     const weight = `${Math.round(300 * 0.0714286)} stone`;
    //     const temperature = `${Math.round((75 - 32) * 5 / 9)} centigrade`;
    //     newStory = newStory.replaceAll('75 farhenheit', temperature);
    //     newStory = newStory.replaceAll('300 pounds', weight);
    // }
    
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
