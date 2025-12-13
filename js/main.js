document.addEventListener('DOMContentLoaded', () => {
    // Navbar Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active'); // Close mobile menu if open
            if (hamburger.innerHTML.includes('times')) {
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Load Data
    if (typeof resumeData !== 'undefined') {
        renderHero(resumeData.profile);
        renderSkills(resumeData.skills);
        renderTimeline(resumeData.education, resumeData.experience);
        initParticles('hero-canvas'); // Start hero background animation
        initParticles('resume-canvas'); // Resume section particles
        renderKeyProjects(resumeData.projects); // New Key Projects Carousel
        renderPublications(resumeData.publications);
        renderRelatedEntries(resumeData.conferences, 'conference-list', 'conferences', 'conference-proceedings');
        renderRelatedEntries(resumeData.patents, 'patent-list', 'patents', 'patents');
        renderFooter(resumeData.profile);
    } else {
        console.error('Resume Data not found!');
    }

    // Fade-in sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

});

// ... (keep initParticles, renderHero, renderSkills, renderTimeline as is) ...

// Key Projects Carousel
function renderKeyProjects(projects) {
    const carousel = document.getElementById('key-projects-carousel');
    if (!carousel) return;

    // Clone projects to avoid modifying original array if needed, or just use as is.
    // We need a mutable array for rotation.
    let currentProjects = [...projects];
    let carouselInterval = null;
    let flippedCards = []; // Track all flipped cards

    const updateCarousel = () => {
        carousel.innerHTML = '';
        // Show first 3 projects
        const visibleProjects = currentProjects.slice(0, 3);

        visibleProjects.forEach(project => {
            const cardFlip = document.createElement('div');
            cardFlip.className = 'project-card-flip';

            cardFlip.innerHTML = `
                <div class="project-card-inner">
                    <div class="project-card-front">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="card-content">
                            <h3>${project.title}</h3>
                        </div>
                    </div>
                    <div class="project-card-back">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank" class="btn-view-more" onclick="event.stopPropagation()">View More</a>
                    </div>
                </div>
            `;

            cardFlip.addEventListener('click', (e) => {
                e.stopPropagation();
                cardFlip.classList.toggle('flipped');
                
                if (cardFlip.classList.contains('flipped')) {
                    // Card is now flipped - add to flipped cards list and pause carousel
                    if (!flippedCards.includes(cardFlip)) {
                        flippedCards.push(cardFlip);
                    }
                    if (carouselInterval) {
                        clearInterval(carouselInterval);
                        carouselInterval = null;
                    }
                } else {
                    // Card is flipped back - remove from list
                    flippedCards = flippedCards.filter(card => card !== cardFlip);
                    // Resume carousel if no cards are flipped
                    if (flippedCards.length === 0) {
                        startCarousel();
                    }
                }
            });

            carousel.appendChild(cardFlip);
        });
    };

    const rotateCarousel = () => {
        if (flippedCards.length > 0) return; // Don't rotate if any cards are flipped
        
        // Add swipe-out animation
        carousel.classList.add('swiping');
        
        setTimeout(() => {
            // Rotate array: move first element to end
            const first = currentProjects.shift();
            currentProjects.push(first);
            updateCarousel();
            
            // Remove swipe-out class to fade back in
            carousel.classList.remove('swiping');
        }, 300);
    };

    const startCarousel = () => {
        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = setInterval(rotateCarousel, 6000);
    };

    const handleOutsideClick = (e) => {
        if (flippedCards.length > 0) {
            // Check if click is outside all flipped cards
            let clickedInsideCard = false;
            for (let card of flippedCards) {
                if (card.contains(e.target)) {
                    clickedInsideCard = true;
                    break;
                }
            }
            
            if (!clickedInsideCard) {
                // Click outside all flipped cards - flip them all back
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                });
                flippedCards = [];
                startCarousel();
            }
        }
    };

    updateCarousel();

    const nextBtn = document.getElementById('carousel-next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', rotateCarousel);
    }

    // Start auto-scroll
    startCarousel();

    // Add document click listener for outside clicks
    document.addEventListener('click', handleOutsideClick);
}

// ... (keep renderProjects, renderPublications, renderFooter, toggleExperience as is) ...

// Particle Background Animation (Spotlight Effect - No Idle/Mobile logic)
function initParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const container = canvas.parentElement;

    // Mouse tracking
    let mouse = { x: null, y: null, radius: 150 }; // Interaction radius

    const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // Configuration
    const particleCount = 100; // High density
    const visibilityRadius = 500;

    function resize() {
        if (!container) return;
        const { offsetWidth, offsetHeight } = container;
        width = canvas.width = offsetWidth;
        height = canvas.height = offsetHeight;
    }

    class Particle {
        constructor() {
            this.size = Math.random() * 1.8 + 1;
            this.baseX = Math.random() * width;
            this.baseY = Math.random() * height;
            this.x = this.baseX;
            this.y = this.baseY;
            this.density = (Math.random() * 100) + 1;
            // Drift properties
            this.angle = Math.random() * 360;
            this.angleSpeed = Math.random() * 0.01 + 0.002;
            this.driftRadius = Math.random() * 20 + 10;
        }

        update() {
            // 1. Low-frequency drift
            this.angle += this.angleSpeed;
            let driftX = this.baseX + Math.cos(this.angle) * this.driftRadius;
            let driftY = this.baseY + Math.sin(this.angle) * this.driftRadius;

            // 2. Mouse Interaction (Repulsion)
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy) * 1.8;

                if (distance < mouse.radius) {
                    const maxDistance = mouse.radius;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = (dx / distance) * force * this.density;
                    const directionY = (dy / distance) * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== driftX) {
                        let dx = this.x - driftX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== driftY) {
                        let dy = this.y - driftY;
                        this.y -= dy / 10;
                    }
                }
            } else {
                if (this.x !== driftX) {
                    let dx = this.x - driftX;
                    this.x -= dx / 20;
                }
                if (this.y !== driftY) {
                    let dy = this.y - driftY;
                    this.y -= dy / 20;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();

            // Proximity Check for Color
            let color = 'rgba(247, 247, 249, 1)'; // Default Dark Grey
            let color_fill = 'rgba(228, 228, 231, 0.2)'; // Default Dark Grey
            let shadow = 'rgba(254, 254, 254, 0.2)';
            let linewidth = 0.5;

            if (mouse.x != null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // If within a slightly larger radius than repulsion
                if (dist < 100) {
                    color = 'rgba(0, 242, 255, 1)';
                    shadow = 'rgba(255, 255, 255, 1)';
                    color_fill = 'rgba(171, 244, 248, 1)';
                    linewidth = 1;

                }
            }

            ctx.shadowBlur = 10;
            ctx.shadowColor = shadow;
            ctx.strokeStyle = color;
            ctx.lineWidth = linewidth;
            ctx.fillStyle = color_fill;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.stroke();
        }
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.update();

            // Only draw if within visibility radius of mouse
            if (mouse.x != null) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < visibilityRadius) {
                    // Smooth fade out at edges
                    const alpha = 1 - Math.pow(dist / visibilityRadius, 2);
                    ctx.globalAlpha = Math.max(0, alpha);
                    p.draw();
                    ctx.globalAlpha = 1.0;
                }
            }
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        particles = [];
        init();
    });

    init();
    animate();
}

// Hero Section
function renderHero(profile) {
    document.getElementById('profile-img').src = profile.image;

    // Inject About text into Hero
    const aboutEl = document.getElementById('hero-about-text');
    if (aboutEl) {
        aboutEl.innerHTML = profile.about;
    }

    const typingElement = document.getElementById('typing-text');
    const roles = profile.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}
// About function removed

// Skills Section
function renderSkills(skills) {
    const iconMap = {
        "Python": "fab fa-python",
        "JavaScript": "fab fa-js",
        "MATLAB": "fas fa-code",
        "ArcGIS / QGIS": "fas fa-globe-americas",
        "Tableau": "fas fa-chart-bar",
        "Observable": "fas fa-eye",
        "VegaLite": "fas fa-chart-line",
        "STAAD Pro": "fas fa-building",
        "AutoCAD": "fas fa-drafting-compass"
    };

    const softwareContainer = document.getElementById('software-skills');
    skills.software.forEach(skill => {
        const iconClass = iconMap[skill] || "fas fa-laptop-code";
        const div = document.createElement('div');
        div.className = 'software-item';
        div.innerHTML = `<i class="${iconClass}"></i> <span>${skill}</span>`;
        softwareContainer.appendChild(div);
    });

    const courseContainer = document.getElementById('relevant-courses');
    skills.courses.forEach(course => {
        const span = document.createElement('span');
        span.className = 'course-tag';
        span.textContent = course;
        courseContainer.appendChild(span);
    });
}

// Timeline Section
function renderTimeline(education, experience) {
    const eduContainer = document.getElementById('education-list');
    const expContainer = document.getElementById('experience-list');

    const createItem = (data, type) => {
        const item = document.createElement('div');
        item.className = 'resume-item';

        const title = type === 'edu' ? data.degree : data.role;
        const subtitle = type === 'edu' ? data.institution : data.organization;
        const location = data.location;
        const period = data.period;

        const descArray = type === 'edu' ? [data.gpa] : data.details;

        let descHTML = '';
        if (Array.isArray(descArray) && descArray.length > 0) {
            if (type === 'exp' && descArray.length > 1) {
                // Show first item
                descHTML = '<ul class="resume-details">';
                descHTML += `<li>${descArray[0]}</li>`;
                descHTML += '</ul>';

                // Hidden items container
                descHTML += '<div class="experience-hidden"><ul class="resume-details">';
                for (let i = 1; i < descArray.length; i++) {
                    descHTML += `<li>${descArray[i]}</li>`;
                }
                descHTML += '</ul></div>';

                // Toggle Button
                descHTML += '<button class="btn-expand" onclick="toggleExperience(this)">Show More <i class="fas fa-chevron-down"></i></button>';
            } else {
                descHTML = '<ul class="resume-details">';
                descArray.forEach(d => descHTML += `<li>${d}</li>`);
                descHTML += '</ul>';
            }
        } else if (typeof descArray === 'string') {
            descHTML = `<p class="resume-desc">${descArray}</p>`;
        }

        item.innerHTML = `
            <div class="resume-marker"></div>
            <h4 class="resume-title">${title}</h4>
            <div class="resume-badge">${period}</div>
            <h5 class="resume-subtitle">${subtitle}, ${location}</h5>
            ${descHTML}
        `;
        return item;
    };

    education.forEach(edu => {
        eduContainer.appendChild(createItem(edu, 'edu'));
    });

    experience.forEach(exp => {
        expContainer.appendChild(createItem(exp, 'exp'));
    });
}

// Projects Section
function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.cursor = 'pointer';

        // Image Section
        const imgHtml = project.image
            ? `<div class="project-img-container"><img src="${project.image}" alt="${project.title}"></div>`
            : '';

        card.innerHTML = `
            ${imgHtml}
            <div class="project-info">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-subtitle">${project.subtitle}</div>
                </div>
                <div class="project-period">${project.period}</div>
                <p class="project-desc">${project.description}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `project.html?id=${project.id}`;
        });

        grid.appendChild(card);
    });
}

// Publications Section with Pagination
let publicationsPage = 0;
const PUBS_PER_PAGE = 5;
const RELATED_PER_PAGE = 3;
const relatedPagination = {
    conferences: 0,
    patents: 0
};

function renderPublications(pubs) {
    const list = document.getElementById('publications-list');
    list.innerHTML = '';
    
    const startIdx = publicationsPage * PUBS_PER_PAGE;
    const endIdx = startIdx + PUBS_PER_PAGE;
    const pubsToShow = pubs.slice(startIdx, endIdx);

    pubsToShow.forEach(pub => {
        const item = document.createElement('div');
        item.className = 'publication-item';
        
        const pdfUrl = pub.pdfUrl || 'assets/publications_pdf/essd-grain-preprint-v1.pdf';
        const doiUrl = pub.doiUrl ? `https://doi.org/${pub.doiUrl}` : 'https://doi.org/10.1029/2025EF006648';
        
        item.innerHTML = `
            <div class="pub-header">
                <div class="pub-title">${pub.title}</div>
                <i class="fas fa-chevron-down pub-icon"></i>
            </div>
            <div class="pub-meta">
                ${pub.authors} (${pub.year}) - <span class="venue-blue">${pub.venue}</span>
            </div>
            <div class="pub-abstract">
                <strong>Abstract:</strong> ${pub.abstract}
                 <br><br>
                 <div class="pub-buttons">
                    <a href="${pdfUrl}" download class="pub-btn pdf-btn"><i class="fas fa-file-pdf"></i> PDF</a>
                    <a href="${doiUrl}" target="_blank" class="pub-btn doi-btn"><i class="fas fa-external-link-alt"></i> DOI</a>
                 </div>
            </div>
        `;

        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });

        list.appendChild(item);
    });

    // Add pagination controls
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pub-pagination';
    
    const leftBtn = document.createElement('button');
    leftBtn.className = 'pub-nav-btn';
    leftBtn.innerHTML = '&lt;';
    leftBtn.disabled = publicationsPage === 0;
    leftBtn.addEventListener('click', () => {
        if (publicationsPage > 0) {
            publicationsPage--;
            renderPublications(pubs);
            document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(leftBtn);
    
    const rightBtn = document.createElement('button');
    rightBtn.className = 'pub-nav-btn';
    rightBtn.innerHTML = '&gt;';
    rightBtn.disabled = endIdx >= pubs.length;
    rightBtn.addEventListener('click', () => {
        if (endIdx < pubs.length) {
            publicationsPage++;
            renderPublications(pubs);
            document.getElementById('publications').scrollIntoView({ behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(rightBtn);

    const pageInfo = document.createElement('div');
    pageInfo.className = 'pub-page-info';
    pageInfo.textContent = `${Math.min(startIdx + 1, pubs.length)}-${Math.min(endIdx, pubs.length)}/${pubs.length}`;
    paginationContainer.appendChild(pageInfo);
    
    list.appendChild(paginationContainer);
}

function renderRelatedEntries(items, listId, key, sectionId) {
    const list = document.getElementById(listId);
    if (!list) return;

    if (!items || items.length === 0) {
        list.innerHTML = '<p class="related-description">Entries coming soon.</p>';
        return;
    }

    const currentPage = relatedPagination[key] || 0;
    const startIdx = currentPage * RELATED_PER_PAGE;
    const endIdx = startIdx + RELATED_PER_PAGE;
    const entriesToShow = items.slice(startIdx, endIdx);

    list.innerHTML = '';

    entriesToShow.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'publication-item related-card';
        card.innerHTML = `
            <div class="pub-header">
                <div class="pub-title">${entry.title}</div>
                <i class="fas fa-chevron-down pub-icon"></i>
            </div>
            <div class="pub-meta">
                ${entry.authors ? entry.authors : ''}${entry.year ? ` (${entry.year})` : ''}${entry.venue ? ` - <span class="venue-blue">${entry.venue}</span>` : ''}
            </div>
            <p class="related-description">${entry.description || ''}</p>
        `;
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
        list.appendChild(card);
    });

    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pub-pagination';

    const leftBtn = document.createElement('button');
    leftBtn.className = 'pub-nav-btn';
    leftBtn.innerHTML = '&lt;';
    leftBtn.disabled = currentPage === 0;
    leftBtn.addEventListener('click', () => {
        if (relatedPagination[key] > 0) {
            relatedPagination[key]--;
            renderRelatedEntries(items, listId, key, sectionId);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(leftBtn);

    const rightBtn = document.createElement('button');
    rightBtn.className = 'pub-nav-btn';
    rightBtn.innerHTML = '&gt;';
    rightBtn.disabled = endIdx >= items.length;
    rightBtn.addEventListener('click', () => {
        if (endIdx < items.length) {
            relatedPagination[key]++;
            renderRelatedEntries(items, listId, key, sectionId);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    });
    paginationContainer.appendChild(rightBtn);

    const pageInfo = document.createElement('div');
    pageInfo.className = 'pub-page-info';
    pageInfo.textContent = `${Math.min(startIdx + 1, items.length)}-${Math.min(endIdx, items.length)}/${items.length}`;
    paginationContainer.appendChild(pageInfo);

    list.appendChild(paginationContainer);
}

function renderFooter(profile) {
    document.getElementById('footer-maillink').href = `mailto:${profile.email}`;
    document.getElementById('footer-linkedin').href = `https://linkedin.com/in/${profile.linkedin}`;
}

// Toggle Experience Details
function toggleExperience(btn) {
    const hiddenContainer = btn.previousElementSibling;
    hiddenContainer.classList.toggle('expanded');

    if (hiddenContainer.classList.contains('expanded')) {
        btn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    } else {
        btn.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
    }
}
