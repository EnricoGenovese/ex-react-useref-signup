Premessa: Stai sviluppando un form di registrazione per una piattaforma dedicata ai giovani sviluppatori web. Gli utenti devono iscriversi indicando le loro competenze e specializzazioni.

Utilizzare utilizzare l'url base:
https://boolean-spec-frontend.vercel.app/freetestapi

Milestone 1: Creare un Form con Campi Controllati
Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):
- Nome completo (input di testo)
- Username (input di testo)
- Password (input di tipo password)
- Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")
- Anni di esperienza (input di tipo number)
- Breve descrizione sullo sviluppatore (textarea)

Aggiungi una validazione al submit, verificando che:
- Tutti i campi siano compilati
- L'input Anni di esperienza sia un numero positivo
- La Specializzazione sia selezionata

Al submit, se il form è valido, stampa in console i dati.

Milestone 2: Validare in tempo reale

Aggiungere la validazione in tempo reale dei seguenti campi:

Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).
Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.
Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

Milestone 3: Convertire i Campi Non Controllati
Non tutti i campi del form necessitano di essere aggiornati a ogni carattere digitato. Alcuni di essi non influenzano direttamente l’interfaccia mentre l’utente li compila, quindi è possibile gestirli in modo più efficiente.

Analizza il form: Identifica quali campi devono rimanere controllati e quali invece possono essere non controllati senza impattare l’esperienza utente.
Converti i campi non controllati: Usa useRef() per gestirli e recuperare il loro valore solo al momento del submit.
Assicurati che la validazione continui a funzionare: Anche se un campo non è controllato, deve comunque essere validato correttamente quando l’utente invia il form.