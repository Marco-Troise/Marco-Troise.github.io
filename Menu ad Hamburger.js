
        document.addEventListener('DOMContentLoaded', () => {
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const navLinksMenu = document.getElementById('nav-links-menu');
            const dropdownToggles = document.querySelectorAll('.dropdown-toggle'); // dropdown fa scendere

            //  Gestione del "click" (tocco) sull'icona del menu per aprire/chiudere il pannello laterale
            hamburgerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                hamburgerBtn.classList.toggle('active');
                navLinksMenu.classList.toggle('open');
            });







            //  Gestione del tocco sulle voci "Servizi" e "Login" per mostrare/nascondere le loro scelte, inserendole verso il basso
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    
                    if (window.innerWidth <= 900) { // Controlla quale dispositivo l'utente sta usando
                        e.preventDefault(); // Impedisce il comportamento di default del link
                        e.stopPropagation();
                        
                        const currentDropdown = this.nextElementSibling; // Seleziona il sotto-menu ul.dropdown associato (servizi o login)
                        const isOpen = currentDropdown.style.display === 'block';
                        
                        // Chiude l'altro sotto-menu se aperto, per non creare sovrapposizioni verticali
                        document.querySelectorAll('.dropdown').forEach(d => {
                            if (d !== currentDropdown) {
                                d.style.display = 'none';
                            }
                        });
                        
                        // Mostra o nasconde (fa scendere su o giù) l'elemento corrente
                        currentDropdown.style.display = isOpen ? 'none' : 'block';
                    }
                });
            });
            
			
			
            // Chiude il menu laterale e le tendine aperte se l'utente fa un click fuori dalla navbar
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger-menu')) {
                    hamburgerBtn.classList.remove('active');
                                        navLinksMenu.classList.remove('open');
                    document.querySelectorAll('.dropdown').forEach(d => {
                        if (window.innerWidth <= 900) {
                            d.style.display = 'none';
                        }
                    });
                }
            });
        });
