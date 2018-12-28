import mongoose from "mongoose";
import customerDesignation from "../models/customerDesignation";
const cd = mongoose.model('customerDesignation', customerDesignation);

const addCustomerDesignation = (req, res) => {
    const desig = new cd(req.body);

    desig.save((error, result) => {
        if (error) {
            return res.status(400).send({
                message: error
            })
        } else {
            res.json(result);
        }
    })
}
export default addCustomerDesignation;