import mongoose from "mongoose";
import ContactSchema from "../models/crmModel";

const contactModel = mongoose.model('Contact2', ContactSchema);

const AddContact = (req, res) => {
    let data = new contactModel(req.body);

    data.save((error, result) => {
        if (error) {
            console.log("Data can't be saved now may be Sever is down\n");
            res.send(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });

}
export default AddContact;