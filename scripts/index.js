const home1 = document.querySelector('.h1-one');
const home2 = document.querySelector('.h1-two');

function typeWriter(element1, element2, element3) {
    const lettersArray1 = element1.innerHTML.split('');
    const lettersArray2 = element2.innerHTML.split('');
    element1.innerHTML = '';
    element2.innerHTML = '';
    lettersArray1.forEach(function(letter, index) {
            setTimeout(function(){
                element1.innerHTML += letter;
                if (element1.innerHTML === "Hi, I'm Marcelo Soares Peralta.") {
                    lettersArray2.forEach(function(letter, index) {
                        setTimeout(function(){
                            element2.style.display = "block";
                            element2.innerHTML += letter;
                        }, 120 * index)
                    });
                }
            }, 120 * index)
    });
}
typeWriter(home1, home2);