import User from "../Models/userModel.js";
import express from "express";
import expressAsyncHandler from "express-async-handler";
const userRouter = express.Router();

userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

userRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      course:req.body.course,
      website:req.body.website
    });
    const createdUser = await newUser.save();
    res.send(createdUser);
  })
);

userRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const idToEdit = req.params.id;
    const newUser = await User.findById(idToEdit);
    newUser.name = req.body.name;newUser.email = req.body.email;
    newUser.phone = req.body.phone;newUser.course = req.body.course;
    newUser.website = req.body.website;

    const newEdited = await newUser.save();
    res.send(newEdited);
  })
);

userRouter.get(
    "/:id",
    expressAsyncHandler(async (req, res) => {
      const idToEdit = req.params.id;
      const user = await User.findById(idToEdit);
      
      res.send(user);
    })
  )

userRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const idToDelete = req.params.id;
    try {
      const delTodo = await User.deleteOne({ _id: idToDelete }, (err) => {
          res.send("Record deleted");
      });
    } catch (e) {
      res.send("Record not found");
    }
  })
);
export default userRouter;
