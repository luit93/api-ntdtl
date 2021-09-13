import UserSchema from "./User.schema.js";

//insert user

export const insertUser = async (newUser) => {
  try {
    const data = await UserSchema(newUser).save();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

//get user

export const getUser = (userName) => {
  try {
    const data = UserSchema.findOne(userName);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

//get user by id

export const getUserById = (_id) => {
  try {
    const data = UserSchema.findById(_id);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
