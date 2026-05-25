// ==================== //
// GESTION DE LA NAVIGATION
// ==================== //
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle du menu hamburger
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navMenu.classList.remove('active');
        
        // Gérer la navigation fluide
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        // Mettre à jour le lien actif
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Mettre à jour le lien actif au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ==================== //
// GESTION DU FORMULAIRE D'ADHÉSION
// ==================== //
const formAdherents = document.getElementById('form-adhesion');
const formMessage = document.getElementById('form-message');

formAdherents.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Réinitialiser le message
    formMessage.innerHTML = '';
    formMessage.classList.remove('success', 'error');
    
    // Récupérer les données du formulaire
    const formData = {
        nom: document.getElementById('nom').value.trim(),
        email: document.getElementById('email').value.trim(),
        telephone: document.getElementById('telephone').value.trim(),
        profession: document.getElementById('profession').value.trim(),
        province: document.getElementById('province').value.trim(),
        message: document.getElementById('message').value.trim(),
        date: new Date().toLocaleDateString('fr-FR'),
        timestamp: new Date().toLocaleString('fr-FR')
    };
    
    // Validation basique
    if (!formData.nom || !formData.email || !formData.telephone || !formData.province) {
        showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    // Validation email
    if (!validateEmail(formData.email)) {
        showMessage('Veuillez entrer une adresse email valide.', 'error');
        return;
    }
    
    // Validation téléphone
    if (!validatePhone(formData.telephone)) {
        showMessage('Veuillez entrer un numéro de téléphone valide.', 'error');
        return;
    }
    
    // Sauvegarder les données dans localStorage
    let adherents = JSON.parse(localStorage.getItem('adherents')) || [];
    adherents.push(formData);
    localStorage.setItem('adherents', JSON.stringify(adherents));
    
    // Afficher le message de succès
    showMessage(
        '✓ Merci pour votre adhésion! Bienvenue dans la famille DBC. Nous vous contacterons très bientôt pour confirmer votre adhésion.',
        'success'
    );
    
    // Réinitialiser le formulaire
    formAdherents.reset();
    
    // Log dans la console (pour vérification)
    console.log('Adhésion enregistrée:', formData);
    console.log('Total adhérents:', adherents.length);
});

// Fonction pour afficher les messages
function showMessage(message, type) {
    formMessage.innerHTML = message;
    formMessage.classList.add(type);
    
    // Auto-scroll vers le message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Effacer le message après 5 secondes si succès
    if (type === 'success') {
        setTimeout(() => {
            formMessage.classList.remove('success');
            formMessage.innerHTML = '';
        }, 5000);
    }
}

// Fonction de validation email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction de validation téléphone
function validatePhone(phone) {
    // Accepte les formats: 0123456789, +243123456789, etc.
    const phoneRegex = /^(\+?243|0)[0-9]{8,9}$/;
    const cleanPhone = phone.replace(/\s/g, '');
    return phoneRegex.test(cleanPhone) || cleanPhone.length >= 9;
}

// ==================== //
// GESTION DES ÉVÉNEMENTS (BOUTONS EN SAVOIR PLUS)
// ==================== //
const eventButtons = document.querySelectorAll('.event-card .btn-secondary');

eventButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const eventCard = button.closest('.event-card');
        const eventTitle = eventCard.querySelector('h3').textContent;
        const eventDate = eventCard.querySelector('.event-date').textContent;
        
        // Créer une alerte avec les détails
        alert(`Événement: ${eventTitle}\n\nDate: ${eventDate}\n\nMerci de votre intérêt! Plus de détails seront disponibles prochainement.`);
    });
});

// ==================== //
// BOUTON DE SCROLL VERS LE HAUT
// ==================== //
const scrollTopBtn = document.createElement('div');
scrollTopBtn.classList.add('scroll-top');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== //
// ANIMATIONS AU CHARGEMENT
// ==================== //
document.addEventListener('DOMContentLoaded', () => {
    // Animer les cartes au chargement
    const cards = document.querySelectorAll('.structure-card, .event-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
        card.style.opacity = '0';
    });
});

// ==================== //
// GESTION DE L'INTERSECTION OBSERVER POUR LES ANIMATIONS AU SCROLL
// ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments animables
document.querySelectorAll('.structure-card, .event-card, .contact-info').forEach(el => {
    observer.observe(el);
});

// ==================== //
// GESTION DE LA NAVIGATION MOBILE
// ==================== //
document.addEventListener('click', (e) => {
    // Fermer le menu si on clique en dehors
    if (!e.target.closest('.navbar')) {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});

// ==================== //
// AFFICHAGE DES STATISTIQUES (OPTIONNEL)
// ==================== //
function updateStats() {
    const adherents = JSON.parse(localStorage.getItem('adherents')) || [];
    console.log(`📊 Statistiques DBC:`);
    console.log(`   - Total adhésions: ${adherents.length}`);
    
    if (adherents.length > 0) {
        const provinces = {};
        adherents.forEach(a => {
            provinces[a.province] = (provinces[a.province] || 0) + 1;
        });
        console.log(`   - Par province:`, provinces);
    }
}

// Appeler les stats au chargement
updateStats();

// ==================== //
// EXPORT DES DONNÉES (CONSOLE)
// ==================== //
function exportAdherents() {
    const adherents = JSON.parse(localStorage.getItem('adherents')) || [];
    const csv = generateCSV(adherents);
    console.log('CSV pour import:');
    console.log(csv);
    return csv;
}

function generateCSV(adherents) {
    const headers = ['Nom', 'Email', 'Téléphone', 'Profession', 'Province', 'Date d\'adhésion', 'Message'];
    const rows = adherents.map(a => [
        a.nom,
        a.email,
        a.telephone,
        a.profession,
        a.province,
        a.date,
        a.message || ''
    ]);
    
    let csv = headers.join(';') + '\n';
    rows.forEach(row => {
        csv += row.map(cell => `"${cell}"`).join(';') + '\n';
    });
    
    return csv;
}

// ==================== //
// COMMANDES CONSOLE UTILES
// ==================== //
console.log('%c🎉 Bienvenue sur le site DBC!', 'color: #FFD700; font-size: 16px; font-weight: bold;');
console.log('%cCommandes disponibles:', 'color: #003DA5; font-weight: bold;');
console.log('  - updateStats() : Voir les statistiques d\'adhésions');
console.log('  - exportAdherents() : Exporter les données en CSV');
console.log('%cDimanche pour le Bien - Être des Congolais', 'color: #228B22; font-style: italic;');
