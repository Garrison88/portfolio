document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // THEME TOGGLE (Light/Dark)
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ==========================================
    // ACCENT COLOR PICKER
    // ==========================================
    // const themePicker = document.getElementById('themePicker');
    // const pickerToggle = themePicker.querySelector('.theme-picker__toggle');
    // const colorButtons = themePicker.querySelectorAll('.color-btn');

    // // Check for saved accent preference or default to coral
    // const savedAccent = localStorage.getItem('accent') || 'coral';
    // html.setAttribute('data-accent', savedAccent);

    // pickerToggle.addEventListener('click', () => {
    //     themePicker.classList.toggle('is-open');
    // });

    // // Close picker when clicking outside
    // document.addEventListener('click', (e) => {
    //     if (!themePicker.contains(e.target)) {
    //         themePicker.classList.remove('is-open');
    //     }
    // });

    // colorButtons.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         const accent = btn.dataset.accent;
    //         html.setAttribute('data-accent', accent);
    //         localStorage.setItem('accent', accent);
    //     });
    // });

    // ==========================================
    // LIGHTBOX
    // ==========================================
    const lightbox = document.getElementById('lightbox');

    if (lightbox) {
        const lightboxImg = lightbox.querySelector('.lightbox__image');
        const lightboxClose = lightbox.querySelector('.lightbox__close');

        // Open lightbox when clicking carousel images
        document.querySelectorAll('.carousel__track img').forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('is-open');
            });
        });

        // Close lightbox
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('is-open');
        });

        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('is-open');
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
                lightbox.classList.remove('is-open');
            }
        });
    }

    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                backToTop.classList.add('is-visible');
            } else {
                backToTop.classList.remove('is-visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // MOBILE MENU TOGGLE
    // ==========================================
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('.nav__mobile-link');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-open');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-open');
            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // SPARKLE CURSOR EFFECT
    // ==========================================
    const sparkleContainer = document.createElement('div');
    sparkleContainer.className = 'sparkle-container';
    sparkleContainer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(sparkleContainer);

    // Add required styles
    const sparkleStyles = document.createElement('style');
    sparkleStyles.textContent = `
    .sparkle-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    }
    
    .sparkle {
        position: absolute;
        pointer-events: none;
        animation: sparkle-fade 800ms ease-out forwards;
    }
    
    .sparkle svg {
        display: block;
    }
    
    @keyframes sparkle-fade {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(90deg);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) rotate(180deg);
        }
    }
`;
    document.head.appendChild(sparkleStyles);

    // Sparkle creation
    let lastSparkleTime = 0;
    const sparkleDelay = 50; // ms between sparkles

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        // Random size between 8 and 16px
        const size = Math.random() * 8 + 8;

        // Get the current accent color
        const accentColor = getComputedStyle(html).getPropertyValue('--accent').trim();

        // Random offset from cursor
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;

        sparkle.style.left = `${x + offsetX - size / 2}px`;
        sparkle.style.top = `${y + offsetY - size / 2}px`;

        // SVG sparkle/star shape
        sparkle.innerHTML = `
        <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${accentColor}">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
        </svg>
    `;

        sparkleContainer.appendChild(sparkle);

        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();

        // Only create sparkle if enough time has passed
        if (now - lastSparkleTime > sparkleDelay) {
            createSparkle(e.clientX, e.clientY);
            lastSparkleTime = now;
        }
    });

    // Optional: Create sparkles on click (burst effect)
    document.addEventListener('click', (e) => {
        // Create a small burst of sparkles
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createSparkle(e.clientX, e.clientY);
            }, i * 30);
        }
    });

}); // End DOMContentLoaded
