import mongoose from 'mongoose'
const reviewSchema = new mongoose.Schema({
    name:{type: String, required: true},
    company: {type: String, required: true},
    message: { type: String, required: true},
    createdAt: { type: Date, default: Date.now }
})
export const ReviewModel = mongoose.model('Review', reviewSchema)