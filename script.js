document.addEventListener('DOMContentLoaded', () => {
    const services = [
        { name: 'Cesar', description: 'Expert cesarean delivery services.', icon: 'https://via.placeholder.com/80' },
        { name: 'LUCS', description: 'Lower uterine segment cesarean section specialists.', icon: 'https://via.placeholder.com/80' },
        { name: 'Gynecologist', description: 'Comprehensive gynecological care.', icon: 'https://via.placeholder.com/80' },
        { name: 'Maxila', description: 'Advanced maxillofacial surgery.', icon: 'https://via.placeholder.com/80' },
        { name: 'Pediatric', description: 'Specialized care for children.', icon: 'https://via.placeholder.com/80' },
        { name: 'Pathology', description: 'Accurate diagnostic lab services.', icon: 'https://via.placeholder.com/80' },
        { name: 'USG', description: 'Advanced imaging and diagnostics.', icon: 'https://via.placeholder.com/80' },
        { name: 'ICU', description: 'State-of-the-art intensive care unit.', icon: 'https://via.placeholder.com/80' },
        { name: 'NICU', description: 'Neonatal intensive care for newborns.', icon: 'https://via.placeholder.com/80' },
        { name: 'X-RAY', description: 'High-quality radiology services.', icon: 'https://via.placeholder.com/80' },
        { name: 'Pharmacy', description: '24/7 access to essential medicines.', icon: 'https://via.placeholder.com/80' },
    ];

    const serviceList = document.querySelector('.service-list');
    services.forEach(service => {
        const div = document.createElement('div');
        div.classList.add('service');
        div.innerHTML = `
            <img src="${service.icon}" alt="${service.name}">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;
        serviceList.appendChild(div);
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}






// menu ber

// const mobileMenu = document.getElementById('mobile-menu');
// const navList = document.querySelector('.nav-list');

// mobileMenu.addEventListener('click', () => {
//     navList.classList.toggle('show');
//     mobileMenu.classList.toggle('closed');
// });

// navList.addEventListener('click', () => {
//     if (navList.classList.contains('show')) {
//         navList.classList.remove('show');
//         mobileMenu.classList.remove('closed');
//     }
// });




// Mobile menu toggle functionality
// Get the elements
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Toggle the navigation menu
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
    mobileMenu.classList.toggle('open');
});



// function makeCall() {
//     window.location.href = 'tel:+919876543210';  // Replace with your desired number
// }



// window.onload = function() {
//     fetch('emergency-button.html')
//         .then(response => response.text())
//         .then(html => {
//             document.body.insertAdjacentHTML('beforeend', html);
//         })
//         .catch(error => console.error('Error loading emergency button:', error));
// };