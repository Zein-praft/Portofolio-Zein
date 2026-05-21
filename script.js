// Inisialisasi library Lucide Icons
lucide.createIcons();

// Kontrol Navigasi Menu Mobile
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Tutup menu mobile secara otomatis ketika salah satu link diklik
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Animasi Element Muncul Saat di-Scroll (Scroll Fade-In)
const observerOptions = { 
    threshold: 0.1, 
    rootMargin: '0px 0px -30px 0px' 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Berhenti mengamati jika animasi sudah berjalan sekali
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Daftarkan semua elemen dengan class .fade-up ke dalam observer
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));