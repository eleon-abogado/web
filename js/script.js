// Menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.menu ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                }
            }
        });
    });
    
    // Validación del formulario de contacto
    const contactoForm = document.getElementById('formContacto');
    if (contactoForm) {
        contactoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación simple
            const nombre = this.nombre.value.trim();
            const email = this.email.value.trim();
            const mensaje = this.mensaje.value.trim();
            const privacidad = this.privacidad.checked;
            
            if (!nombre || !email || !mensaje || !privacidad) {
                alert('Por favor complete todos los campos obligatorios y acepte la política de privacidad.');
                return;
            }
            
            // Aquí iría el código para enviar el formulario
            // Por ahora solo mostramos un mensaje
            alert('Gracias por su mensaje. Me pondré en contacto con usted lo antes posible.');
            this.reset();
        });
    }
    
    // Animación al hacer scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const header = document.querySelector('header');
        
        if (scrollPosition > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
