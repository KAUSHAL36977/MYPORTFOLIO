// Modern JavaScript with ES6+ features, DOM manipulation, and animations
document.addEventListener('DOMContentLoaded', () => {
    // Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection?.scrollIntoView({ behavior: 'smooth' });
            navMenu.classList.remove('active');
        });
    });

    // Project Data
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with React and Node.js',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: 'https://via.placeholder.com/300x200'
        },
        {
            title: 'Task Manager',
            description: 'A productivity app with real-time updates',
            tags: ['Vue.js', 'Firebase', 'Tailwind'],
            image: 'https://via.placeholder.com/300x200'
        },
        {
            title: 'Portfolio Website',
            description: 'A responsive portfolio template',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://via.placeholder.com/300x200'
        }
    ];

    // Dynamically create project cards
    const projectGrid = document.querySelector('.project-grid');
    
    const createProjectCards = () => {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            card.innerHTML = `
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover;">
                <div style="padding: 1.5rem;">
                    <h3 style="margin-bottom: 0.5rem;">${project.title}</h3>
                    <p style="margin-bottom: 1rem;">${project.description}</p>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${project.tags.map(tag => `
                            <span style="background: #e9ecef; padding: 0.25rem 0.5rem; border-radius: 3px; font-size: 0.875rem;">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                </div>
            `;
            
            projectGrid?.appendChild(card);
        });
    };

    createProjectCards();

    // Form handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            alert('Message sent successfully!');
            contactForm.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again.');
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Skill bars animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const percentage = item.textContent
