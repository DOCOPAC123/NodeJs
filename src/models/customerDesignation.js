import mongoose from "mongoose";

const cdSchema = mongoose.Schema;

const customerDesignation = new cdSchema({
    firstName: {
        type: String,
        required: "Enter the First Name"
    },
    secondName: {
        type: String,
        required: "Enter the Second Name"
    },
    designation: {
        type: String,
    }
});
export default customerDesignation;