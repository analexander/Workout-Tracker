// const router = require('express').Router();
// const Workout = require('../models/workout.js');
const db = require("../models");

module.exports = function(app) {

app.post('/api/exercise', (req, res) => {

})

app.put('/api/workouts/:id', ({body, params}, res ) => {

})

app.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

app.get('/api/workouts/range', (req, res) => {

})

app.delete('/api/workouts', ({body}, res) => {

})

}