
const scanner = new Html5QrcodeScanner('ScannerizzaCodiceQR', 
{
   qrbox: 
   {
     width: 250,
     height: 250,
   },
   fps: 20,
});


scanner.render(ScansioneRiuscita, ScansioneNonRiuscita);

function ScansioneRiuscita(RisultatoScansione) {
  // Aggiorna l'area dei risultati mostrando l'ultimo QR Code scansionato, continuando senza sparire 
  document.getElementById('RisultatoScansione').innerHTML = `
    <h2>Scansione QR Code Riuscita</h2>
    <p>Clicca Qui per la pagina scansionata: <a href="${RisultatoScansione}" target="_blank">${RisultatoScansione}</a></p>`;
}

function ScansioneNonRiuscita(Errore) {
  console.error(Errore); // Per gli eventuali errori (non ho inserito nessuna gestione di conflitti o errori)
}

