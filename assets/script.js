var burgerBar = document.querySelector('.burger-bar');
var listName = document.querySelector('.list-name-android');
var nav = document.querySelector('nav');

var buka = false;
burgerBar.addEventListener('click', function(){
    buka = !buka;
    if(buka){
        nav.style.backgroundColor = "#f6f6f6"
        nav.style.color = "#414141"
        listName.style.display = "block";
    }else{
        nav.style.backgroundColor = "transparent"
        nav.style.color = "white"
        listName.style.display = "none";
    }
});

document.addEventListener("scroll", function(){
    if(window.scrollY > 204){
        nav.style.backgroundColor = "#f6f6f6"
        nav.style.color = "#414141"
    }else{
        nav.style.backgroundColor = "transparent"
        nav.style.color = "white"
    }
})

document.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translate3d(0, ' + scrollPosition * 0.5 + 'px, 0)';
});

// Add this script to your existing JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentIndex);
});

window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    const scaleFactor = 1 + scrollPosition / 10000; // Adjust scale factor to control the speed of the effect

    hero.style.backgroundSize = `${scaleFactor * 100}% ${scaleFactor * 100}%`;
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Navigation scroll effect
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const burgerBar = document.querySelector('.burger-bar');
    const mobileMenu = document.querySelector('.list-name-android');
    
    if (burgerBar && mobileMenu) {
        burgerBar.addEventListener('click', function() {
            if (mobileMenu.style.display === 'block') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'block';
            }
        });
    }
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    // Close mobile menu if open
                    if (mobileMenu && mobileMenu.style.display === 'block') {
                        mobileMenu.style.display = 'none';
                    }
                    
                    // Calculate offset for fixed header
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Tab functionality for artwork section
    const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('fade-in');
        });
        
        // Show selected tab content with fade animation
        const tabId = button.getAttribute('data-tab');
        const activeContent = document.getElementById(`${tabId}-content`);
        if (activeContent) {
            activeContent.classList.remove('hidden');
            setTimeout(() => {
                activeContent.classList.add('fade-in');
            }, 10);
        }
    });
});
    // Trigger click on the first tab button to show the first tab content
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
}
);
  // Initialize AOS animation library
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Tab functionality for artwork section
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // Show selected tab content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId + '-content').classList.remove('hidden');
        });
    });
    
    // Audio player functionality
    const playPauseBtn = document.getElementById('play-pause-btn');
    const backgroundMusic = document.getElementById('background-music');
    const volumeSlider = document.getElementById('volume-slider');
    
    if(playPauseBtn && backgroundMusic && volumeSlider) {
        playPauseBtn.addEventListener('click', function() {
            if(backgroundMusic.paused) {
                backgroundMusic.play();
                playPauseBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
            } else {
                backgroundMusic.pause();
                playPauseBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
            }
        });
        
        volumeSlider.addEventListener('input', function() {
            backgroundMusic.volume = this.value / 100;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    // Tilt effect
    projectCards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });

    function handleTilt(e) {
        const card = this;
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateX = (mouseY / cardRect.height * 20).toFixed(2);
        const rotateY = (mouseX / cardRect.width * -20).toFixed(2);
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    }

    function resetTilt() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }

    // Parallax effect for project images
    const projectImages = document.querySelectorAll('.project-image');
    
    window.addEventListener('scroll', () => {
        projectImages.forEach(image => {
            const speed = 0.2;
            const rect = image.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                const yPos = (window.pageYOffset - rect.top) * speed;
                image.style.backgroundPosition = `center ${yPos}px`;
            }
        });
    });

    // Tag animation
    const projectTags = document.querySelectorAll('.project-tags span');
    
    projectTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
