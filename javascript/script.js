// Visitor name
function visitorName(){
    let replaceVisitor = prompt("Masukkan nama anda","");
    document.getElementById("visitor").innerHTML = replaceVisitor;
}
visitorName();

// Contact us validate form

function validateForm() {
    let inputUsername = document.getElementById("nama").value;
    let inputTanggal = document.getElementById("tanggal").value;
    let inputGender = document.getElementByName("gender").value;
    let inputPesan = document.getElementById("pesan").value;
    let inputForm = document.getElementById("userInfo").value;

    let waktu = new Date();
    let time = waktu.getTimezoneOffset();
    let day = waktu.getDate();
    let month = waktu.getMonth();
    let year = waktu.getFullYear();

    // inputForm.addEventListener(document.getElementById('btn'), (def)=>{
    inputForm.addEventListener("submit", (def) => {
        def.preventDefault();
        document.getElementById("nowTime").innerHTML = time;
        document.getElementById("nowDate").innerHTML = day + " - ";
        document.getElementById("nowMonth").innerHTML = month + " - ";
        document.getElementById("nowYear").innerHTML = year;
        document.getElementById("inputUsername").innerHTML = inputUsername.value;
        document.getElementById("inputTanggal").innerHTML = inputTanggal.value;
        document.getElementById("inputPesan").innerHTML = inputPesan.value;

        var jenisKelamin = document.getElementsByName("gender");

        for (let i = 0; i <= jenisKelamin.length; i++) {
            if (gender[i].checked) {
                document.getElementById("jenisGender").innerHTML = jenisKelamin[i].value;
            }
        }


    })
}


// Banner Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sliderImage");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}