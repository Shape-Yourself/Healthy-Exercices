const { Schema, model } = require("mongoose");

const fitnessSchema = new Schema(
  {
    name: {
      type: String,
    },
    force: {
      type: String,
      enum: ["pull", "push", "static"],
    },
    level: {
        type: String,
        enum: ["beginner", "intermediate", "expert"]
    },
    primaryMuscles: {
      type: [String],
      enum: ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats", "middle back", "neck", "shoulders", "quadriceps", "traps", "triceps"]
    },
    secondaryMuscles: {
        type: [String],
        enum: ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats","lower back", "middle back", "neck", "shoulders", "quadriceps", "traps", "triceps"]
      },
    mechanic: {
        type: String,
        enum: ["compound", "isolation"]
    },
    equipment: {
        type: String,
        enum: ["barbell", "body only", "other", "dumbbell", "kettlebells", "cable", "machine", "medicine ball", "bands", "e-z curl bar"]
    },
    category: {
        type: String,
        enum: ["strength", "stretching", "plyometrics", "powerlifting", "olympic weightlifting", "strongman", "cardio"]
    },
    _id: '64f20ca5ebc46a5385fd9c97'
  },
  {
    timestamps: true,
  }
);

const Fitness = model("Fitness", fitnessSchema);

module.exports = Fitness;
