/* ============================================
   LEON LDA SERVICES & NOTARY - MASTER JAVASCRIPT
   Professional Legal Document Services
   All animations, interactions, and functionality
   ============================================ */

// ============================================
// INITIALIZATION - Runs when DOM is loaded
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Leon LDA Services - Website Initialized');
    
    // Initialize all features
    initMobileMenu();
    initSmoothScrolling();
    initNavigationScroll();
    initScrollAnimations();
    initFAQAccordion();
    initModalSystem();
    initStaggeredAnimations();
    initFormValidation();
    initBackToTop();
});

// ============================================
// MOBILE MENU - Hamburger Navigation
// ============================================
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    if (!mobileToggle || !navLinks) return;
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });
    
    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });
}

// ============================================
// SMOOTH SCROLLING - For anchor links
// ============================================
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore empty anchors or just '#'
            if (!href || href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.main-nav')?.offsetHeight || 80;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// NAVIGATION SCROLL EFFECT - Shrink on scroll
// ============================================
function initNavigationScroll() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;
    
    let lastScrollTop = 0;
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateNavigation(lastScrollTop);
                ticking = false;
            });
            ticking = true;
        }
    });
    
    function updateNavigation(scrollTop) {
        if (scrollTop > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
}

// ============================================
// SCROLL ANIMATIONS - Intersection Observer
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Optional: Unobserve after animation (performance optimization)
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// STAGGERED ANIMATIONS - Delay for cards
// ============================================
function initStaggeredAnimations() {
    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Feature cards
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Testimonial cards
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
    
    // Guide cards
    const guideCards = document.querySelectorAll('.guide-card');
    guideCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Download cards
    const downloadCards = document.querySelectorAll('.download-card');
    downloadCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
    
    // FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Link cards
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Area cards
    const areaCards = document.querySelectorAll('.area-card');
    areaCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
    
    // Credential cards
    const credentialCards = document.querySelectorAll('.credential-card');
    credentialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Stat items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Trust grid items
    const trustItems = document.querySelectorAll('.trust-item');
    trustItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// ============================================
// FAQ ACCORDION - Expand/Collapse
// ============================================
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = this.querySelector('.faq-icon');
            const isActive = this.classList.contains('active');
            
            // Get the category container
            const currentCategory = faqItem.closest('.faq-category');
            
            // Close all other FAQs in the same category
            if (currentCategory) {
                const categoryQuestions = currentCategory.querySelectorAll('.faq-question');
                categoryQuestions.forEach(q => {
                    if (q !== question) {
                        q.classList.remove('active');
                        const qAnswer = q.parentElement.querySelector('.faq-answer');
                        if (qAnswer) qAnswer.classList.remove('active');
                        const qIcon = q.querySelector('.faq-icon');
                        if (qIcon) qIcon.textContent = '+';
                    }
                });
            } else {
                // If no category, close all FAQs on page
                document.querySelectorAll('.faq-question').forEach(q => {
                    if (q !== question) {
                        q.classList.remove('active');
                        const qAnswer = q.parentElement.querySelector('.faq-answer');
                        if (qAnswer) qAnswer.classList.remove('active');
                        const qIcon = q.querySelector('.faq-icon');
                        if (qIcon) qIcon.textContent = '+';
                    }
                });
            }
            
            // Toggle current FAQ
            if (!isActive) {
                this.classList.add('active');
                if (answer) answer.classList.add('active');
                if (icon) icon.textContent = '×';
            } else {
                this.classList.remove('active');
                if (answer) answer.classList.remove('active');
                if (icon) icon.textContent = '+';
            }
        });
    });
}

// ============================================
// FAQ CATEGORY TOGGLE - Switch between categories
// ============================================
function initFAQCategories() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    if (categoryButtons.length === 0 || faqCategories.length === 0) return;
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            // Remove active class from all buttons and categories
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            faqCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked button and corresponding category
            this.classList.add('active');
            const targetElement = document.getElementById(targetCategory);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
}

// ============================================
// MODAL SYSTEM - For service details
// ============================================
function initModalSystem() {
    const modal = document.getElementById('serviceModal');
    const modalClose = document.querySelector('.modal-close');
    const body = document.body;
    
    if (!modal) return;
    
    // Close button
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Click outside modal to close
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        }
    }
    
    // Make closeModal available globally
    window.closeModal = closeModal;
}

// Show service details in modal
window.showServiceDetails = function(serviceType) {
    const modal = document.getElementById('serviceModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    if (!modal || !title || !body) return;
    
    const serviceDetails = {
        'family-law': {
            title: 'Family Law Document Services',
            content: `
                <div style="text-align: center; margin-bottom: 40px;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">👨‍👩‍👧‍👦</div>
                    <h3 style="color: var(--primary-red); margin-bottom: 20px; font-size: 2rem;">Professional Family Law Document Preparation</h3>
                    <p style="font-size: 1.2rem; color: var(--text-gray); line-height: 1.6;">Navigate family legal matters with confidence and professional support.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin: 40px 0;">
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 15px; border-left: 4px solid var(--primary-red);">
                        <h4 style="color: var(--primary-red); margin-bottom: 15px;">💔 Divorce & Separation</h4>
                        <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                            <li>Petition for Dissolution</li>
                            <li>Response Documents</li>
                            <li>Settlement Agreements</li>
                            <li>Final Judgment Preparation</li>
                        </ul>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 15px; border-left: 4px solid var(--primary-gold);">
                        <h4 style="color: var(--primary-red); margin-bottom: 15px;">👶 Child Custody & Support</h4>
                        <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                            <li>Custody Order Requests</li>
                            <li>Support Calculations</li>
                            <li>Parenting Plans</li>
                            <li>Modification Petitions</li>
                        </ul>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 40px;">
                    <a href="/services/family-law" style="background: linear-gradient(135deg, var(--primary-red), var(--light-red)); color: white; padding: 18px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; margin: 10px;">View Full Family Law Page</a>
                    <a href="/contact" onclick="closeModal()" style="background: var(--primary-gold); color: var(--dark-red); padding: 18px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; margin: 10px;">Get Free Consultation</a>
                </div>
            `
        },
        'tax-business': {
            title: 'Tax Preparation & Business Services',
            content: `
                <div style="text-align: center; margin-bottom: 40px;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">💼</div>
                    <h3 style="color: var(--primary-red); margin-bottom: 20px; font-size: 2rem;">Professional Tax & Business Services</h3>
                    <p style="font-size: 1.2rem; color: var(--text-gray); line-height: 1.6;">Comprehensive tax preparation and business formation services.</p>
                </div>
                
                <div style="text-align: center; margin-top: 40px;">
                    <a href="/services/tax-services" style="background: linear-gradient(135deg, var(--primary-red), var(--light-red)); color: white; padding: 18px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; margin: 10px;">📋 View All Tax Services</a>
                    <a href="tel:3233265357" style="background: var(--primary-gold); color: var(--dark-red); padding: 18px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; margin: 10px;">📞 Call for Consultation</a>
                </div>
            `
        },
        'notary-translation': {
            title: 'Notary & Translation Services',
            content: `
                <div style="text-align: center; margin-bottom: 40px;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">📋</div>
                    <h3 style="color: var(--primary-red); margin-bottom: 20px; font-size: 2rem;">Professional Notary & Translation Services</h3>
                    <p style="font-size: 1.2rem; color: var(--text-gray); line-height: 1.6;">Comprehensive notary public services and certified translation.</p>
                </div>
                
                <div style="text-align: center; margin-top: 40px;">
                    <a href="/services/notary-services" style="background: linear-gradient(135deg, var(--primary-red), var(--light-red)); color: white; padding: 18px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; margin: 10px;">View Notary Services</a>
                    <a href="/contact" onclick="closeModal()" style="background: var(--primary-gold); color: var(--dark-red); padding: 18px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; margin: 10px;">Schedule Service</a>
                </div>
            `
        }
    };
    
    if (serviceDetails[serviceType]) {
        title.textContent = serviceDetails[serviceType].title;
        body.innerHTML = serviceDetails[serviceType].content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

// ============================================
// FORM VALIDATION - Contact forms
// ============================================
function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--primary-red)';
                    
                    // Show error message
                    let errorMsg = field.parentElement.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('span');
                        errorMsg.className = 'error-message';
                        errorMsg.style.color = 'var(--primary-red)';
                        errorMsg.style.fontSize = '0.9rem';
                        errorMsg.style.marginTop = '5px';
                        errorMsg.style.display = 'block';
                        errorMsg.textContent = 'This field is required';
                        field.parentElement.appendChild(errorMsg);
                    }
                } else {
                    field.style.borderColor = '';
                    const errorMsg = field.parentElement.querySelector('.error-message');
                    if (errorMsg) errorMsg.remove();
                }
            });
            
            // Email validation
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value && !emailRegex.test(field.value)) {
                    isValid = false;
                    field.style.borderColor = 'var(--primary-red)';
                    
                    let errorMsg = field.parentElement.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('span');
                        errorMsg.className = 'error-message';
                        errorMsg.style.color = 'var(--primary-red)';
                        errorMsg.style.fontSize = '0.9rem';
                        errorMsg.style.marginTop = '5px';
                        errorMsg.style.display = 'block';
                        errorMsg.textContent = 'Please enter a valid email';
                        field.parentElement.appendChild(errorMsg);
                    }
                }
            });
            
            if (isValid) {
                // Form is valid, submit it
                form.submit();
            }
        });
        
        // Clear error on input
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '';
                const errorMsg = this.parentElement.querySelector('.error-message');
                if (errorMsg) errorMsg.remove();
            });
        });
    });
}

// ============================================
// BACK TO TOP BUTTON
// ============================================
function initBackToTop() {
    // Create back to top button if it doesn't exist
    let backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'backToTop';
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        
        // Style the button
        Object.assign(backToTopBtn.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--primary-red), var(--light-red))',
            color: 'white',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            opacity: '0',
            visibility: 'hidden',
            transition: 'all 0.3s ease',
            zIndex: '999',
            boxShadow: '0 4px 15px rgba(185, 28, 28, 0.3)'
        });
        
        document.body.appendChild(backToTopBtn);
    }
    
    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(185, 28, 28, 0.4)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(185, 28, 28, 0.3)';
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Console log for debugging (remove in production)
console.log('%c Leon LDA Services & Notary ', 
    'background: #b91c1c; color: #fbbf24; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c Website by Leon LDA Services ', 
    'background: #fbbf24; color: #7f1d1d; font-size: 12px; padding: 5px;');

// Initialize FAQ categories if they exist
document.addEventListener('DOMContentLoaded', initFAQCategories);