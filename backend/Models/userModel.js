import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  // id: {
  //   type:Number,
  //   required:true,
  // },
  name: {
    type: String,
    required: true,
    unique:true
  },
  course:{ type: String,
    required: true,

  },
  email:{ type: String,
    required: true,

  },
  phone:{ type: String,
    required: true,

  },
  website:{ type: String,
    required: true,

  }
});

const User = mongoose.model("User", userSchema);
export default User;
