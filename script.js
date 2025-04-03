function showPage(pageName) {
    const mainContent = document.getElementById('main-content');
    
    // Here you can add specific content for each page
    switch(pageName) {
        case 'par-mums':
            mainContent.innerHTML = `
                <h2>Par mums</h2>
                <p>Mēs vēlamies piedāvāt ko īpašu ar ģimeni pavadīt laiku.</p>
                <p>Mēs jūs aizvedīsim uz vietas ko vēlaties paši labi pavadīt laiku.</p>
            `;
            break;
        case 'kontakti':
            mainContent.innerHTML = `
                <h2>Kontakti</h2>
                <p>Email: tourism.info@gmail.com</p>
                <p>Tālrunis: +371 12345678</p>
            `;
            break;
        // Add other cases for different pages
        default:
            mainContent.innerHTML = `
                <div class="content-grid">
                    <div class="box" onclick="showPage('izbrauciens-cauri-latvijai')">
                        <h3>Izbrauciens cauri Latvijai</h3>
                    </div>
                    <div class="box" onclick="showPage('pastaiga-pa-vecrigu')">
                        <h3>Pastaiga pa vecrīgu</h3>
                    </div>
                    <div class="box" onclick="showPage('jautrais-izbrauciens')">
                        <h3>Jautrais izbrauciens ģimenei</h3>
                    </div>
                    <div class="box" onclick="showPage('pastaiga-pa-juralu')">
                        <h3>Pastaiga pa jūralu</h3>
                    </div>
                </div>
            `;
    }
}