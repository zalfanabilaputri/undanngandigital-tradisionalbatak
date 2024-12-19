function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(function() {
            alert('No. Rekening berhasil disalin!');
        })
        .catch(function(err) {
            console.error('Error copying text: ', err);
        });
}


        function scrollToSection(id) {  
            document.getElementById(id).scrollIntoView({behavior: 'smooth'});
        }

        function copyText(text) {
            navigator.clipboard.writeText(text);
            alert("Text copied: " + text);
        }

 
function bukaUndangan (){
    const s1 = document.querySelector('#section1');
    const s2 = document.querySelector('#section2');
    const s3 = document.querySelector('#section3');
    const s4 = document.querySelector('#section4');
    s1.style.display = 'none';
    s2.style.display = 'block';
    s3.style.display = 'block';
    s4.style.display = 'block';

    const musik = document.querySelector('#kotak-musik');
 musik.style.display = 'block';
 const lagu = document.querySelector('#lagu');
 lagu.play();

}
 
// Fungsi untuk menampilkan musik dan memulai audio saat halaman dimuat
window.download = function() {
    const musik = document.querySelector('#kotak-musik');
    musik.style.display = 'block';  // Tampilkan kotak musik saat halaman dimuat

    const lagu = document.querySelector('#lagu');
    lagu.play().catch(error => {
        console.log("Autoplay gagal: Interaksi pengguna diperlukan untuk memutar audio.");
    });
};

function putarlagu(){
    const lagu = document.querySelector('#lagu');
    const tombol = document.querySelector('#kontrol');

    if(lagu.paused){
        lagu.play();
        tombol.src = 'assets/img/volume-off-indicator.png';
    }else{
        lagu.pause();
        tombol.src = 'assets/img/volume.png';
    }
}



// Script untuk menangani input form
const form = document.getElementById('messageForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form reload halaman

    // Ambil nilai input dari form
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Tampilkan hasil jika semua field diisi
    if (name && message) {
        resultDiv.innerHTML = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Pesan:</strong> ${message}</p>
        `;
        resultDiv.style.display = 'block'; // Tampilkan hasil
    }
});
