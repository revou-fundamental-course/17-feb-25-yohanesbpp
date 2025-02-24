/* Ini Javascript External */

document.addEventListener("DOMContentLoaded", function () {
    const slides = [
        {
            image: "assets/img1.jpg",
            text: '"Visiting Japan was a dream come true! The blend of tradition and modernity."',
            name: "Sophia Lim",
            gender: "Female",
            age: "28 years"
        },
        {
            image: "assets/img2.jpg",
            text: '"Singapore\'s futuristic skyline, delicious food, and cleanliness impressed me beyond words."',
            name: "Michael Chan",
            gender: "Male",
            age: "39 years"
        },
        {
            image: "assets/img3.jpg",
            text: '"Thailand\'s beaches, temples, and street food made my trip truly special."',
            name: "Daniel Wong",
            gender: "Male",
            age: "36 years"
        },
        {
            image: "assets/img4.jpg",
            text: '"Vietnam was an unforgettable journey! The food, people, and landscapes were simply amazing."',
            name: "Kenji Tanaka",
            gender: "Male",
            age: "42 years"
        },
        {
            image: "assets/img5.jpg",
            text: '"China\'s history and architectural wonders left me speechless. Walking the Great Wall was a surreal experience!"',
            name: "Emily Zhang",
            gender: "Female",
            age: "26 years"
        },
        {
            image: "assets/img6.jpg",
            text: '"Malaysia\'s vibrant culture and stunning landscapes made this trip one of the best experiences of my life."',
            name: "Aisha Rahman",
            gender: "Female",
            age: "31 years"
        }
    ];

    let currentIndex = 0;
    const slideImage = document.getElementById("slide-image");
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialUser = document.getElementById("testimonial-user");

    function changeSlide() {
        // Efek fade out sebelum mengganti gambar & teks
        slideImage.style.opacity = 0;
        testimonialText.style.opacity = 0;
        testimonialUser.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % slides.length; // Pindah ke slide berikutnya
            slideImage.src = slides[currentIndex].image;
            testimonialText.textContent = slides[currentIndex].text;
            testimonialUser.textContent = `${slides[currentIndex].name}, ${slides[currentIndex].gender}, ${slides[currentIndex].age}`;

            // Tentukan warna berdasarkan gender
            let color = slides[currentIndex].gender === "Male" ? "blue" : "red";

            // Tambahkan ikon user Font Awesome dengan warna yang sesuai
            testimonialUser.innerHTML = `<i class="fa-solid fa-user" style="color: ${color};"></i> 
            <span style="color: ${color};">${slides[currentIndex].name}, ${slides[currentIndex].gender}, ${slides[currentIndex].age}</span>`;
            
            // Efek fade in setelah mengganti konten
            slideImage.style.opacity = 1;
            testimonialText.style.opacity = 1;
            testimonialUser.style.opacity = 1;
        }, 500); // Delay 500ms sebelum menampilkan yang baru
    }

    setInterval(changeSlide, 7000);
});

    // Form Validation
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let destination = document.getElementById("destination").value.trim();
    
        // Validasi semua field harus diisi
        if (!name || !email || !destination) {
            alert("All fields must be filled out properly!");
            return;
        }
    
        // Validasi panjang nama minimal 3 karakter
        if (name.length < 3) {
            alert("Name must be at least 3 characters long!");
            return;
        }
    
        // Validasi email dengan Regex
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }
    
        // Jika validasi berhasil
        alert("Form submitted successfully!");
        this.reset();
    });    