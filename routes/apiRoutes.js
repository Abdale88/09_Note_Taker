//
const fs = require('fs');
const { v4: uniqueId } = require('uuid');
let ArrayOfObj = require('../db/db.json');


module.exports = (app) => {

    app.get('/api/notes', (req, res) => { 
        try {
            const data = fs.readFileSync('db/db.json', 'utf-8')
            res.json(JSON.parse(data))
          } catch (err) {
            console.error(err)
          }
    })

};
