// const router = require('express').Router();
// const Workout = require('../models/workout.js');
const db = require("../models");

module.exports = function (app) {

    app.post('/api/workouts', (req, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true })
            .then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });

    });

    app.get('/api/workouts', (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                dbWorkout.forEach(workout => {
                    let total = 0;
                    workout.exercises.forEach(exercise => {
                        total += exercise.duration;
                    });
                    workout.totalDuration = total;
                });
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.delete('/api/workouts', ({ body }, res) => {

    });

}