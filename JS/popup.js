let modalImg = document.querySelector('.modal-img');
let modal = document.getElementById('modal');
let img = document.querySelectorAll('.catalog__img');
let close = document.getElementById('close');
//let bigImg = ["imgBig/Anapa-big.png", "imgBig/gelen-big.png", "imgBig/sochi-big.png", "imgBig/Abrau-big.png", "imgBig/novoros-big.png"];
let n = 0;
let next = document.getElementById('butNext');



function windowModal() {
    for (let i = 0; i < img.length; i++) {
            img[i].onclick = function () {
            modal.style.display = 'block';
           modalImg.src = img[i].getAttribute('data-s');
        }
    }
    close.onclick = function (e) {

            modal.style.display = 'none';


    };

 }
windowModal();



















