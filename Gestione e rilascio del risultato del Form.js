let fileDaScaricare = "";
document.getElementById('risk-form').addEventListener('submit', function(event) 
{
  
  
  event.preventDefault(); // evita il download automatico dopo aver cliccato su  Richiedi File
  // Recupera gli elementi HTML del selettore
  const selectElement = document.getElementById('posizione-select');
  const nomeFilePdf = selectElement.value;
  const nomeStanzaTesto = selectElement.options[selectElement.selectedIndex].text;
  
  if (nomeFilePdf) {
    fileDaScaricare = nomeFilePdf; // Salva il nome del file associato alla stanza scelta senza avviare nessun download automatico con nome già presente
    
    document.getElementById('result-text').innerHTML = `Risultato pronto per la posizione: <strong>${nomeStanzaTesto}</strong>`;
    document.getElementById('result-section').style.display = 'block';  // da none a block, rendendo visibile il risultato'
  }
}
);

// Gestore di eventi sul pulsante arancione per attivare il download effettivo solo su esplicito comando dell'utente
document.getElementById('btn-download-pdf').addEventListener('click', function() 
{
  if (fileDaScaricare) 
      {
         // Genera il link relativo compatibile con l'host di GitHub Pages (Cartella PDF alla radice del progetto)
         const percorsoPdf = 'PDF/' + fileDaScaricare;
  
         // Genera un elemento di ancoraggio (link) temporaneo non visibile nel DOM
         const linkSalvataggio = document.createElement('a');
         linkSalvataggio.href = percorsoPdf;
         linkSalvataggio.download = fileDaScaricare;
    
         // Aggiunge il link al documento, simula il click per far partire il download reale e poi lo rimuove subito
         document.body.appendChild(linkSalvataggio);
         linkSalvataggio.click();
         document.body.removeChild(linkSalvataggio);
      }
}
);

