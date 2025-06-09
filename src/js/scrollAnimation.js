export function initScrollAnimation() {
    const sections = document.querySelectorAll('.problems, .approach, .cases, .testimonials, .faq');
    
    // Add spacers between sections
    sections.forEach(section => {
        const spacer = document.createElement('div');
        spacer.className = 'section-spacer';
        spacer.style.height = '95vh';
        section.parentNode.insertBefore(spacer, section);
    });

    sections.forEach(section => {
        const container = section.querySelector('.container');
        const title = container.querySelector('.section-title');
        
        // Create original header wrapper
        const originalWrapper = document.createElement('div');
        originalWrapper.className = 'section-header original';
        container.insertBefore(originalWrapper, title);
        originalWrapper.appendChild(title);

        // Create fixed header clone
        const fixedWrapper = document.createElement('div');
        fixedWrapper.className = 'section-header fixed';
        const clonedTitle = title.cloneNode(true);
        fixedWrapper.appendChild(clonedTitle);
        container.insertBefore(fixedWrapper, originalWrapper);

        // Wrap remaining content
        const contentElements = [...container.children].filter(el => 
            !el.classList.contains('section-title') && 
            !el.classList.contains('section-header')
        );
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'section-content';
        container.appendChild(contentWrapper);
        contentElements.forEach(el => contentWrapper.appendChild(el));
    });

    function handleScroll() {
    sections.forEach(section => {
        const spacer = section.previousElementSibling;
        const originalHeader = section.querySelector('.section-header.original');
        const fixedHeader = section.querySelector('.section-header.fixed');
        const content = section.querySelector('.section-content');
        const spacerRect = spacer.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Show fixed header when spacer is
        if (spacerRect.bottom <= viewportHeight * 1.3) {
            fixedHeader.classList.add('visible');
            originalHeader.classList.remove('visible');
            section.classList.add('has-fixed-header');
            
            // Switch to original header right before content
            if (sectionRect.top <= (viewportHeight * 0.3)+20) {
                fixedHeader.classList.remove('visible');
                originalHeader.classList.add('visible');
                section.classList.remove('has-fixed-header');
            }
        } else {
            // Hide both headers
            fixedHeader.classList.remove('visible');
            originalHeader.classList.remove('visible');
            section.classList.remove('has-fixed-header');
        }
        
        // Show content when section approaches
        if (sectionRect.top <= viewportHeight * 0.3) {
            content.classList.add('visible');
        } else {
            content.classList.remove('visible');
        }
    });
}

    window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
    // Initial check
    requestAnimationFrame(handleScroll);
}
