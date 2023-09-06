const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema ({
    exercise: {
        type: Schema.Types.ObjectId,
        ref: "Fitness",
    },
});

const planSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: [50, 'Title cannot be more than 50 characters'],
      trim: true,
    },
    description: {
      type: String,
      required: false,
      maxlength: [200, 'Description cannot be more than 200 characters'],
      trim: true,
      lowercase: true,
    },
    monday: exerciseSchema,
    tuesday: exerciseSchema,
    wednesday: exerciseSchema,
    thursday: exerciseSchema,
    friday: exerciseSchema,
    saturday: exerciseSchema,
    sunday: exerciseSchema,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Plan = model("Plan", planSchema);

module.exports = Plan;