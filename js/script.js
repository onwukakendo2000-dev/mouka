// Handle sidebar toggle
function showSidebar(){
    const sidebar = document.querySelector('.sidebar-wrapper')
    sidebar.style.display = 'block';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar-wrapper')
    sidebar.style.display = 'none'
}

// Page Scroll animation
const obeserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if(e.isIntersecting){
            e.target.classList.add('visible');
        } 
    });
}, { threshold: 0.2 });

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((el) => { obeserver.observe(el); });