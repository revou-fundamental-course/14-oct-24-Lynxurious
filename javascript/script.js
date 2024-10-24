// Visitor name
function visitorName(){
    let replaceVisitor = prompt("Masukkan nama anda","");
    document.getElementById("visitor").innerHTML = replaceVisitor;
}
visitorName();

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

// Contact us validate form
let namaUser = document.getElementById("nama");
let emailUsers = document.getElementById("userEmail");
let tanggalUser = document.getElementById("tanggal");
let pesanUser = document.getElementById("pesan");
let form = document.getElementById("formInput");
let today = new Date();
let day = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();

form.addEventListener("submit", (empty)=>{
    empty.preventDefault();
    document.getElementById("nowDate").innerHTML = day+" - ";
    document.getElementById("nowMonth").innerHTML = month+" - ";
    document.getElementById("nowYear").innerHTML = year;
    document.getElementById("namaUser").innerHTML = namaUser.value;
    document.getElementById("emailUser").innerHTML = emailUsers.value;
    document.getElementById("tanggalUser").innerHTML = tanggalUser.value;
    document.getElementById("pesanUser").innerHTML = pesanUser.value;

    var genderUsers = document.getElementsByName("jenisGender");
    
    for (let i = 0; i <= gender.length; i++) {
        if(genderUsers[i].checked){
            document.getElementById("userGender").innerHTML = genderUsers[i].value;
        }
    }
})
