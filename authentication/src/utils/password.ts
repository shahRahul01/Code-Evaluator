import bcrypt from "bcryptjs";

export function hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(2);
    return bcrypt.hashSync(password, salt);
}

export function comparePassword(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword);
}
