import mongoose from 'mongoose';

const Assignment = new mongoose.Schema({
    course: mongoose.Schema.Types.ObjectId,
    name: String,
    weight: Number,
    order: Number,
    exercises: Array,
});

/*
exercises {
    _id: mongoose.Schema.Types.ObjectId
    exerciseName: String,
    description: String,
    createdTime: Date,
    deadline: Date,
}
*/

export default mongoose.model("assignment", Assignment, "assignment");