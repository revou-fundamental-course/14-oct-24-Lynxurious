
function validateForm() {
    let inputUsername = document.getElementById('nama').value;
    let inputTanggal = document.getElementById('tanggal').value;
    let inputGender = document.getElementById('gender').value;
    let inputPesan = document.getElementById('pesan').value;

    if (inputUsername == '') {
        alert('Input kosong!');
    }
    else {
        document.getElementById('text-output').value;
        console.log(inputUsername);
    }

    if (inputTanggal == '') {
        alert('Input kosong!');
    }
    else {
        document.getElementById('text-output').value;
        console.log(inputTanggal);
    }

    if (inputGender == '') {
        alert('Input kosong!');
    }
    else {
        document.getElementById('text-output').value;
        console.log(inputGender);
    }

    if (inputPesan == '') {
        alert('Input kosong!');
    }
    else {
        document.getElementById('text-output').value;
        console.log(inputPesan);
    }

    let indexSlide = 0;
    nextSlide(1);

    function nextSlide(n) {
        showSlide(indexSlide += n);
    }
    function showSlide() {
        let listImage = document.getElementsByClassName("banner");

        if (n > listImage.length - 1){
            indexSlide = 0;
        }

        if (n < 0) {
            indexSlide = listImage.length - 1;
        }
        

        let index = 0;
        while (index < listImage.length) {
            listImage[index].computedStyleMap.display = 'none';
            index++;
        }

        listImage[indexSlide].computedStyleMap.display = 'block';
        console.log(listImage);
        console.log(n);
    }

    console.log("Hello World")

}

setInterval(() == nextSlide(1), 2000);


