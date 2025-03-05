import { userSignin } from "../types/inputtypes";
import User from "../models/user.model";

// Create a new user
export async function createUser(userData: userSignin) {
    try {
        const response = await User.create({
            email: userData.email,
            password: userData.password,
            name: userData.name,
            profilePic: userData.profilePic
        });
        return response;
    } catch (error) {
        console.error("Error inserting user:", error);
        throw new Error("Something went wrong in inserting the user");
    }
}

// Get all users
export async function getAllUsers() {
    try {
        const response = await User.find();
        return response;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Something went wrong in getting the users");
    }
}

// Get a user by email
export async function getUser(email: string) {
    try {
        const response = await User.findOne({ email }); 
        return response;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Something went wrong in getting the user");
    }
}

// Update user by email
export async function updateUser(email: string, name: string) {
    try {
        const response = await User.findOneAndUpdate(
            { email },
            { name }, 
            { new: true } 
        );
        return response;
    } catch (error) {
        console.error("Error updating user:", error);
        throw new Error("Something went wrong in updating the user name");
    }
}

// Delete user by ID
export async function deleteUser(id: string) {
    try {
        const response = await User.findByIdAndDelete(id);
        return response;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error("Something went wrong in deleting the user");
    }
}
