// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const savedNotesData = require('../db/data/savedNotesData');
const newNoteData = require('../db/data/newNoteData');

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  
  app.get('/api', (req, res) => res.json(savedNotesData));

  app.get('/api/notes', (req, res) => res.json(newNoteData));

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a new note request... this data is then sent to the server...
  // Then the server saves the data to the newNoteData array)
  // ---------------------------------------------------------------------------

  
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    
  app.post('api/notes', (req, res) => {
    const newNote = req.body;
  
    console.log(newNote);
  
    notes.push(newNote);
  
    console.log(newNote);
  
    res.json(newNote);
  
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    newNoteData.length = 0;
    savedNotesData.length = 0;

    res.json({ ok: true });
  });
};
