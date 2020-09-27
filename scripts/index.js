const home1 = document.querySelector('.h1-one');
const home2 = document.querySelector('.h1-two');
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');
const div4 = document.querySelector('.div4');

function typeWriter(element1, element2, element3, element4) {
    const lettersArray1 = element1.innerHTML.split('');
    const lettersArray2 = element2.innerHTML.split('');
    const lettersArray3 = element3.innerHTML.split('');
    element1.innerHTML = '';
    element2.innerHTML = '';
    element3.innerHTML = '';
    // element4.innerHTML = '';
    lettersArray1.forEach(function(letter, index) {
            setTimeout(function(){
                element1.innerHTML += letter;
                if (element1.innerHTML === "Hi, I'm Marcelo Soares Peralta.") {
                    lettersArray2.forEach(function(letter, index) {
                        setTimeout(function(){
                            element4.style.display = "none";
                            element2.style.display = "block";
                            element2.innerHTML += letter;
                        }, 120 * index)
                    });
                }
            }, 120 * index)
    });
    lettersArray3.forEach(function(letter, index) {
        setTimeout(function(){
            element3.innerHTML += letter;
        }, 120 * index)
    });
}
typeWriter(home1, home2, div1, div2, div3, div4);