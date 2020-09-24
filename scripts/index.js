const home1 = document.querySelector('.h1-one');
const home2 = document.querySelector('.h1-two');

function typeWriter(element) {
    const lettersArray = element.innerHTML.split('');
    element.innerHTML = '';
    lettersArray.forEach(function(letter, index) {
        setTimeout(function(){
            element.innerHTML += letter;
        }, 120 * index)
    });
}
typeWriter(home1);

function typeWriter2(element) {
    const lettersArray = element.innerHTML.split('');
    element.innerHTML = '';
    lettersArray.forEach(function(letter, index) {
        setTimeout(function(){
            element.innerHTML += letter;
        }, 120 * index)
    });
}
typeWriter2(home2);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}