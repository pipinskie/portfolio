/**
 * Portfolio JavaScript
 * 
 * This script handles the interactive elements of the portfolio website,
 * including the mobile navigation menu, smooth scrolling, and other
 * user interface enhancements.
 */

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Get references to navigation elements
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    
    /**
     * Mobile Menu Toggle
     * Toggles the mobile navigation menu when the hamburger icon is clicked
     */
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    /**
     * Close Menu When Clicking Outside
     * Closes the mobile menu when user clicks anywhere outside the menu
     */
    document.addEventListener('click', function(e) {
        if (navToggle && navList && !navToggle.contains(e.target) && !navList.contains(e.target)) {
            navList.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    /**
     * Close Menu When Clicking a Link
     * Closes the mobile menu when a navigation link is clicked
     */
    const navLinks = document.querySelectorAll('.nav-list a, .navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navToggle && navList) {
                navList.classList.remove('active');
                navToggle.classList.remove('active');
            }
            
            // Highlight the active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    /**
     * Smooth Scrolling for Anchor Links
     * Provides smooth scrolling animation when clicking on anchor links
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only process actual anchor links (not just "#")
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    /**
     * Set Active Navigation Link Based on Current Page
     * Highlights the navigation link for the current page
     */
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    /**
     * Add Animation Classes to Elements
     * Adds animation classes to elements when they come into view
     */
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.tech-card, .about-text');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run animation check on load and scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});