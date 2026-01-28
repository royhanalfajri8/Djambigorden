/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Let CSS handle smooth scroll and offset
            navMenu.classList.remove('active'); // Close menu on click
        });
    });

    // Scroll Animation (Fade In)
    const fadeElems = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElems.forEach(elem => {
        observer.observe(elem);
    });

    // --- Lightbox Modal Logic ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-modal");

    // Get all images that should be clickable
    const images = document.querySelectorAll('.gallery-item img, .product-img img');

    images.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Close Modal when clicking (x)
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    // Close Modal when clicking outside the image
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    // --- Gallery "See All" Toggle ---
    const viewAllBtn = document.getElementById('view-all-gallery');
    const galleryGrid = document.querySelector('.gallery-grid');

    if (viewAllBtn && galleryGrid) {
        viewAllBtn.addEventListener('click', () => {
            galleryGrid.classList.toggle('show-all');
            if (galleryGrid.classList.contains('show-all')) {
                viewAllBtn.textContent = 'Sembunyikan Gambar';
            } else {
                viewAllBtn.textContent = 'Lihat Semua Gambar';
                // Scroll back to gallery section when hiding
                document.getElementById('galeri').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

});
