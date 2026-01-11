// CHIMERA Memecoin Website Interactive Effects

document.addEventListener('DOMContentLoaded', function() {
    console.log('🐉 CHIMERA Memecoin - Mythology Awakens 🔥');
    
    // ===== ANIMATION ENHANCEMENTS =====
    
    // Fire particles interaction
    const createFireParticles = () => {
        const bgElements = document.querySelector('.bg-elements');
        
        for (let i = 0; i < 10; i++) {
            const fire = document.createElement('div');
            fire.className = 'fire-particle';
            
            // Random position
            fire.style.left = `${Math.random() * 100}%`;
            fire.style.top = `${Math.random() * 100}%`;
            
            // Random animation delay
            fire.style.animationDelay = `${Math.random() * 8}s`;
            
            bgElements.appendChild(fire);
        }
    };
    
    // Create initial particles
    createFireParticles();
    
    // ===== SCROLL ANIMATIONS =====
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and stats
    document.querySelectorAll('.myth-card, .stat-item, .timeline-item, .community-link').forEach(el => {
        observer.observe(el);
    });
    
    // ===== INTERACTIVE CHIMERA =====
    
    const chimeraParts = document.querySelectorAll('.creature-head, .creature-body, .creature-tail');
    
    chimeraParts.forEach(part => {
        part.addEventListener('mouseenter', () => {
            part.style.animation = 'none';
            part.style.transform = 'scale(1.3)';
            
            setTimeout(() => {
                part.style.animation = '';
                part.style.transform = '';
            }, 300);
        });
    });
    
    // ===== TYPEWRITER EFFECT =====
    
    const typewriterTexts = [
        "The Myth is Real...",
        "Fire-breathing returns...",
        "Legend never dies..."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.querySelector('.hero-subtitle');
    
    function typeWriter() {
        const currentText = typewriterTexts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typewriterTexts.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        }
    }
    
    // Start typewriter if element exists
    if (typewriterElement) {
        setTimeout(typeWriter, 1000);
    }
    
    // ===== BURN ANIMATION =====
    
    const burnAnimation = document.querySelector('.burn-animation');
    
    if (burnAnimation) {
        setInterval(() => {
            burnAnimation.classList.add('burning');
            setTimeout(() => {
                burnAnimation.classList.remove('burning');
            }, 500);
        }, 3000);
    }
    
    // ===== NAVIGATION HIGHLIGHT =====
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // ===== SOUND EFFECTS =====
    
    const playSound = (soundType) => {
        // In a real implementation, you would have sound files
        console.log(`Playing ${soundType} sound`);
        
        // Example: Play fire sound on button hover
        const buttons = document.querySelectorAll('.btn-primary, .community-link');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                // Simulate sound effect
                button.style.transform = 'scale(1.05)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
            });
        });
    };
    
    // Initialize sounds
    playSound('fire');
    
    // ===== RITUAL COUNTER (Fake Stats) =====
    
    const updateStats = () => {
        const statValues = document.querySelectorAll('.stat-value');
        
        statValues.forEach(stat => {
            const originalText = stat.textContent;
            const originalNumber = parseInt(originalText.replace(/,/g, ''));
            
            // Add random fluctuation
            const fluctuation = Math.floor(Math.random() * 1000);
            const newNumber = originalNumber + fluctuation;
            
            // Format with commas
            stat.textContent = newNumber.toLocaleString();
            
            // Reset after delay
            setTimeout(() => {
                stat.textContent = originalText;
            }, 2000);
        });
    };
    
    // Update stats every 5 seconds
    setInterval(updateStats, 5000);
    
    // ===== DARK MODE TOGGLE (Optional) =====
    
    const createDarkModeToggle = () => {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'dark-mode-toggle';
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        toggleBtn.title = 'Toggle Dark Mode';
        
        document.querySelector('.header').appendChild(toggleBtn);
        
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
                toggleBtn.title = 'Switch to Dark Mode';
            } else {
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
                toggleBtn.title = 'Switch to Light Mode';
            }
        });
    };
    
    // Uncomment to enable dark mode toggle
    // createDarkModeToggle();
    
    // ===== CONFETTI EFFECT ON CLICK =====
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-primary') || e.target.closest('.community-link')) {
            createClickEffect(e.clientX, e.clientY);
        }
    });
    
    function createClickEffect(x, y) {
        const effects = ['🔥', '🐉', '🦁', '🐐', '💀', '👑'];
        
        for (let i = 0; i < 5; i++) {
            const effect = document.createElement('div');
            effect.textContent = effects[Math.floor(Math.random() * effects.length)];
            effect.style.position = 'fixed';
            effect.style.left = `${x}px`;
            effect.style.top = `${y}px`;
            effect.style.fontSize = '1.5rem';
            effect.style.zIndex = '9999';
            effect.style.pointerEvents = 'none';
            effect.style.animation = `floatUp 1s ease-out forwards`;
            
            document.body.appendChild(effect);
            
            // Add animation
            const keyframes = `
                @keyframes floatUp {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(${Math.random() * 100 - 50}px, -100px) scale(0);
                    }
                }
            `;
            
            if (!document.querySelector('#floatAnimation')) {
                const style = document.createElement('style');
                style.id = 'floatAnimation';
                style.textContent = keyframes;
                document.head.appendChild(style);
            }
            
            // Remove after animation
            setTimeout(() => {
                effect.remove();
            }, 1000);
        }
    }
    
    // ===== MYTHICAL CONSOLE LOG =====
    
    const mythicalMessages = [
        "🔥 The Chimera awakens...",
        "🐉 Ancient power flows through the blockchain...",
        "🦁 Three beasts, one legend...",
        "🐐 The herd gathers...",
        "💀 Memes never die, they just become myths...",
        "👑 Become part of the legend..."
    ];
    
    // Show random message in console
    console.log(`%c${mythicalMessages[Math.floor(Math.random() * mythicalMessages.length)]}`, 
        'color: #FF4500; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #FF4500;');
    
    console.log('%c🐉 CHIMERA MEMECOIN 🐉', 
        'color: #6A0DAD; font-size: 20px; font-weight: bold;');
    console.log('%cRemember: This is mythology, not financial advice!', 
        'color: #8B0000; font-size: 12px;');
});

// ===== ADDITIONAL CSS FOR JS EFFECTS =====
const additionalCSS = `
.animate-in {
    animation: slideUp 0.8s ease forwards;
    opacity: 0;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.nav-link.active {
    color: var(--fire-orange);
}

.nav-link.active::after {
    width: 100%;
}

.burning {
    animation: burnEffect 0.5s ease;
}

@keyframes burnEffect {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.dark-mode-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--blood-red);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
}

.light-mode {
    background: #f0f0f0;
    color: #333;
}

.light-mode .dark-section {
    background: rgba(255, 255, 255, 0.9);
    color: #333;
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);