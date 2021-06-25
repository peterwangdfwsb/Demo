const express = require('express');
const app = express();

const PORT = 4000;
const mongoose   = require('mongoose');

// connect
mongoose.connect('mongodb+srv://admin:admin@cluster0-bhsym.mongodb.net/test?retryWrites=true&w=majority',
					{useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error',  err=>console.log(err));
db.on('open', ()=>console.log('opened'));
db.on('close', ()=>console.log('closed'));

// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

var schema = new Schema(
    {
      name: String,
      binary: Buffer,
      living: Boolean,
      updated: { type: Date, default: Date.now },
      age: { type: Number, min: 18, max: 65, required: true },
      mixed: Schema.Types.Mixed,
      _someId: Schema.Types.ObjectId,
      array: [],
      ofString: [String], // You can also have an array of each of the other types too.
      nested: { stuff: { type: String, lowercase: true, trim: true } }
    })

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );



const DATA_FROM_DB = [
  "San Jose",
  "San Francisco",
  "San Diego",
  "Los Angelos",
  "New York",
];

app.get("/api/city", (req, res) => {
  try {
    const { searchTerm } = req.query; // "san"
    let filteredResult = [];
    // sanity check
    if (searchTerm) {
      filteredResult = DATA_FROM_DB.filter((data) => new RegExp(searchTerm, "i").test(data));
    }
  
    res.status(200).json({ filteredResult });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong.", e });
  }
})



app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`);
});