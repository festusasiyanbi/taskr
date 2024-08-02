import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: "Your name is required",
    },
    email: {
        type: String,
        required: "Your email is required",
    },
    message: {
        type: String,
        required: "Your message is required",
    },
})

export default mongoose.model('Contact', contactSchema);