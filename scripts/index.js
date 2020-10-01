const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');
const div4 = document.querySelector('.div4');

function typeWriter(div1, div2, div3, div4) {
    const lettersArray1 = div1.innerHTML.split('');
    const lettersArray2 = div3.innerHTML.split('');
    div1.innerHTML = '';
    div3.innerHTML = '';
    div4.style.display = 'none';
    lettersArray1.forEach(function(letter, index) {
            setTimeout(function(){
                div1.innerHTML += letter;
                if (div1.innerHTML === "Hi, I'm Marcelo Soares Peralta.") {
                    lettersArray2.forEach(function(letter, index) {
                        setTimeout(function(){
                            div2.style.display = "none";
                            div4.style.display = "block";
                            div3.innerHTML += letter;
                        }, 120 * index)
                    });
                }
            }, 120 * index)
    });
}
typeWriter(div1, div2, div3, div4);

function enableScrollToTop() {
    document.querySelector('.arrow').style.display = "block";
}

function disableScrollToTop() {
    document.querySelector('.arrow').style.display = "none";
}

function scrollToTop(){
    document.querySelector('#rd_home').checked = "true";
    document.querySelector('.arrow').style.display = "none";
}