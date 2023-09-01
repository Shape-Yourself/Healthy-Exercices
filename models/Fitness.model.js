const { Schema, model } = require("mongoose");

const fitnessSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    force: {
      type: String,
      required: false,
      enum: ["pull", "push", "static"],
    },
    level: {
        type: String,
        required: false,
        enum: ["beginner", "intermediate", "expert"]
    },
    muscle: {
      type: String,
      required: false,
      enum: ["abdominals", "abductors", "adductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps"]
    },
    
    offset: {
        type: Number,
        default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Fitness = model("Fitness", fitnessSchema);

module.exports = Fitness;
