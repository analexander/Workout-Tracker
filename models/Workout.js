const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter an exercise type'
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter the exercise name'
      },
      duration: {
        type: Number,
        required: 'Enter the exercise duration'
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      },
    },
  ],
  totalDuration: {
    type: Number
  }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;