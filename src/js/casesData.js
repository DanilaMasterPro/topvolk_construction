export function renderCaseCard(caseData) {
    return `
        <div class="swiper-slide">
            <div class="case-card">
                <div class="case-header">
                    <div class="case-gallery-container">
                        <img src="${caseData.images[0]}" alt="${caseData.title} view" class="case-preview-image">
                    </div>
                </div>

                <div class="case-main">
                    <div class="case-info">
                        <div class="case-details">
                            <div class="case-title">
                                <h3>${caseData.title}</h3>
                                <p class="case-subtitle">${caseData.subtitle}</p>
                            </div>
                            <div class="case-gallery-results">
                                <h4>Results:</h4>
                                ${caseData.results.map(result => `<div class="result-item">${result}</div>`).join('')}
                            </div>

                            <div class="case-links">
                                <button class="view-case-btn case-btn" data-case-id="${caseData.id}">Learn more</button>
                                <button class="case-btn contact-btn">📩 I want same</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function renderModalCaseCard(caseData) {
    return `
        <div class="case-card">
            <div class="case-header">
                <div class="case-title">
                    <h3>${caseData.title}</h3>
                    <p class="case-subtitle">${caseData.subtitle}</p>
                </div>
            </div>

            <div class="case-main">
                <div class="case-gallery-container">
                    <div class="case-gallery">
                        <div class="gallery-loader">
                            <div class="loader-spinner"></div>
                        </div>
                        ${caseData.images.map((image, index) => `
                            <img src="${image}" alt="${caseData.title} view ${index + 1}" class="case-image" 
                                 onload="this.style.opacity='1'" style="opacity: 0; transition: opacity 0.3s;">
                        `).join('')}
                    </div>
                </div>

                <div class="case-info">
                    <div class="case-details">
                        <div class="case-goal">
                            <h4>Goal:</h4>
                            <p>${caseData.goal}</p>
                        </div>

                        <div class="case-steps">
                            <h4>Implementation steps:</h4>
                            <ol>
                                ${caseData.steps.map(step => `<li>${step}</li>`).join('')}
                            </ol>
                        </div>

                        <div class="case-results">
                            <h4>Results:</h4>
                            ${caseData.results.map(result => `<div class="result-item">${result}</div>`).join('')}
                        </div>

                        <div class="case-links">
                            <button class="case-btn contact-btn">📩 I want similar project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const casesData = [
    {
        id: 'levelhouse',
        title: 'Modern Family Home',
        subtitle: 'Contemporary residential construction project',
        images: [
            './img/levelhouse1.jpg',
            './img/levelhouse2.jpg',
            './img/levelhouse3.jpg',
            './img/levelhouse4.jpg',
            './img/levelhouse5.jpg',
            './img/levelhouse6.jpg',
            './img/levelhouse7.jpg'
        ],
        goal: 'Build a modern, energy-efficient family home with open concept living and sustainable materials.',
        steps: [
            'Site analysis – soil testing, surveying, and analyzing local building codes and restrictions',
            'Planning – creating architectural drawings, obtaining permits, and developing construction timeline',
            'Foundation – excavation, pouring concrete foundation, and waterproofing',
            'Framing – building the structural framework using sustainable lumber',
            'Systems installation – electrical, plumbing, and HVAC installation',
            'Finishing – insulation, drywall, flooring, painting, and final inspections'
        ],
        results: [
            '⏳ Project timeline: 8 months',
            '🏡 3,200 sq ft living space',
            '🌱 LEED Gold certified'
        ],
        links: {
            demo: 'https://telegram.cyberteam-international.com/?id=levelhouse',
            contact: 'https://t.me/constructionusa'
        }
    },

    {
        id: 'haswater',
        title: 'Commercial Office Building',
        subtitle: 'Modern commercial construction in downtown area',
        images: [
            './img/haswater1.jpg',
            './img/haswater2.jpg',
            './img/haswater3.jpg',
            './img/haswater4.jpg',
            './img/haswater5.jpg',
            './img/haswater6.jpg',
            './img/haswater7.jpg',
            './img/haswater8.jpg'
        ],
        goal: 'Construct a state-of-the-art office building with modern amenities and sustainable design features',
        steps: [
            'Project planning – architectural design, structural engineering, and permit acquisition',
            'Site preparation – excavation, utility connections, and foundation work',
            'Structural work – steel frame construction and concrete flooring',
            'Building envelope – exterior walls, windows, and roofing installation',
            'Interior systems – electrical, plumbing, HVAC, and telecommunications',
            'Finishing work – interior design, landscaping, and final inspections'
        ],
        results: [
            '📈 Project completed on time and within budget',
            '⏳ Project timeline: 14 months',
            '🏢 45,000 sq ft office space'
        ],
        links: {
            demo: 'https://telegram.cyberteam-international.com/?id=haswater',
            contact: 'https://t.me/constructionusa'
        }
    },

    {
        id: 'sferoom',
        title: 'Luxury Home Renovation',
        subtitle: 'Complete interior and exterior renovation project',
        images: [
            './img/sferoom1.jpg',
            './img/sferoom2.jpg',
            './img/sferoom3.jpg',
            './img/sferoom4.jpg',
            './img/sferoom5.jpg',
            './img/sferoom6.jpg'
        ],
        goal: 'Transform an outdated home into a modern luxury residence while preserving its architectural heritage.',
        steps: [
            'Assessment and planning – structural evaluation, design planning, and permit acquisition',
            'Demolition – careful removal of outdated elements while preserving structural integrity',
            'Structural updates – reinforcing foundation, updating electrical and plumbing systems',
            'Interior renovation – new flooring, modern kitchen and bathrooms, custom built-ins',
            'Exterior improvements – new siding, windows, roofing, and landscaping',
            'Final touches – painting, fixtures installation, and quality control inspection'
        ],
        results: [
            '🏠 Home value increased by 85%',
            '⏳ Project timeline: 6 months',
            '✨ Featured in local architecture magazine'
        ],
        links: {
            demo: 'https://telegram.cyberteam-international.com/?id=sferoom',
            contact: 'https://t.me/constructionusa'
        }
    },
    {
        id: 'mkgroup',
        title: 'Industrial Warehouse',
        subtitle: 'Large-scale commercial warehouse construction',
        images: [
            './img/mkgroup1.png',
            './img/mkgroup2.png',
            './img/mkgroup3.png',
            './img/mkgroup4.png',
            './img/mkgroup5.png'
        ],
        goal: 'Build a modern industrial warehouse with efficient loading docks and climate control systems',
        steps: [
            'Site planning – surveying large industrial site and coordinating with utility providers',
            'Foundation work – massive concrete foundation with reinforced steel framework',
            'Steel structure – erecting pre-engineered steel building with crane systems',
            'Roofing and siding – installing industrial-grade roofing and exterior panels',
            'Systems installation – electrical distribution, HVAC, fire safety, and security systems',
            'Final inspection – comprehensive testing of all systems and safety protocols'
        ],
        results: [
            '📦 150,000 sq ft storage capacity',
            '⏳ Project timeline: 10 months',
            '🚛 12 loading dock stations'
        ],
        links: {
            demo: 'https://telegram.cyberteam-international.com/?id=mkgroup',
            contact: 'https://t.me/constructionusa'
        }
    },

    {
        id: 'buildflix',
        title: 'Multi-Family Housing Complex',
        subtitle: 'Affordable housing development project',
        images: [
            './img/buildflix1.png',
            './img/buildflix2.png',
            './img/buildflix3.png',
            './img/buildflix4.png',
            './img/buildflix5.png'
        ],
        goal: 'Develop an affordable housing complex with modern amenities and sustainable construction practices',
        steps: [
            'Community planning – working with city planners and community stakeholders for project approval',
            'Site development – grading, utility installation, and infrastructure development',
            'Foundation and framing – multi-building foundation work and structural framing',
            'Building systems – coordinated installation of electrical, plumbing, and HVAC across all units',
            'Interior finishing – flooring, cabinets, appliances, and paint in all residential units',
            'Landscaping and amenities – common areas, playground, parking, and green spaces'
        ],
        results: [
            '🏠 48 affordable housing units',
            '⏳ Project timeline: 18 months',
            '🌱 Green building certification achieved'
        ],
        links: {
            demo: 'https://telegram.cyberteam-international.com/?id=buildflix',
            contact: 'https://t.me/constructionusa'
        }
    }
];
