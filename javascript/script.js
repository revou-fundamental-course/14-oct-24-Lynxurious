// Contact us validate form
function validateForm() {
    let inputUsername = document.getElementById('nama').value;
    let inputTanggal = document.getElementById('tanggal').value;
    let inputGender = document.getElementById('gender').value;
    let inputPesan = document.getElementById('pesan').value;

    if (inputUsername == '') {
        alert('Input Nama Kosong!');
    }
    else {
        // document.getElementById('text-output').value = document.getElementById('nama').value;
        console.log(inputUsername);
    }

    if (inputTanggal == '') {
        alert('Input Tanggal Kosong!');
    }
    else {
        // document.getElementById('text-output').value = document.getElementById('tanggal').value;
        console.log(inputTanggal);
    }

    if (inputGender == '') {
        alert('Input Gender Kosong!');
    }
    else {
        // document.getElementById('text-output').value = document.getElementById('gender').value;
        console.log(inputGender);
    }

    if (inputPesan == '') {
        alert('Input Pesan Kosong!');
    }
    else {
        // document.getElementById('text-output').value = document.getElementById('pesan').value;
        console.log(inputPesan);
    }

    // document.getElementById('text-output').value = document.getElementById('nama', 'tanggal', 'gender', 'pesan').value;
    document.getElementById('text-output').value = print('nama', 'tanggal', 'gender', 'pesan').value;

}

// Auto/Manual Banner Slider
let indexSlide = 0;
nextSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}
function showSlide() {
    let listImage = document.getElementsByClassName("banner");

    if (n > listImage.length - 1) {
        indexSlide = 0;
    }

    if (n < 0) {
        indexSlide = listImage.length - 1;
    }

    let index = 0;
    while (index < listImage.length) {
        listImage[index].getElementsByClassName.display = 'none';
        index++;
    }

    listImage[indexSlide].getElementsByClassName.display = 'block';
    console.log(listImage);
    console.log(n);
}

// setInterval(() == nextSlide(1), 2000);


