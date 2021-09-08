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
