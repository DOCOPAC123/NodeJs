import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import userModel from "../models/userModel";

const user = mongoose.model('User', userModel);

// Instance 1 of class user.
export const register = (req, res) => {
    const newUser = new user(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);
    newUser.save((error, result) => {
        if (error) {
            res.status(400).send({
                message: error
            })
        } else {
            result.hashPassword = undefined;
            res.json(result);
        }
    })
}

// Instance 2 of class user
export const login = (req, res) => {
    user.findOne({
        email: req.body.email
    }, (error, users) => {
        if (error) {
            res.status(400).send({
                message: error
            })
        } else {
            if (!users) {
                res.status(401).send({
                    message: "Wrong Authentication!!!"
                })
            } else {
                if (!user.comparePassword(req.body.password, user.hashPassword)) {
                    res.status(401).send({
                        message: "Wrong password!!!"
                    })
                } else {
                    return res.json({
                        token: jwt.sign({
                            email: user.email,
                            userName: user.userName
                        })
                    })
                }
            }
        }

    })
}

export const loginRequired = (req, res) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({
            message: "unauth user!!!"
        });
    }
}