import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: "Enter the First Name"
    },
    secondName: {
        type: String,
        required: "Enter the Last Name"
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});
export default ContactSchema;