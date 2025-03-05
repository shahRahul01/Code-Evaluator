import z from "zod";

export const signupInput = z.object({
    email: z.string().email("Email is a required"),
    name: z.string().optional(),
    password: z.string().min(8, "Password should contain minimum 8 characters"),
    profilePic: z.string().optional()
});

export type SignupInput = z.infer<typeof signupInput>;

export type userSignin = {
    email: string,
    name: string | null,
    password: string,
    profilePic: string | null
}

export const signinInput = z.object({
    email: z.string().email("Email is required"),
    password: z.string().min(8, "Password should contain minimum 8 characters"),
});

export type SigninInput = z.infer<typeof signinInput>;