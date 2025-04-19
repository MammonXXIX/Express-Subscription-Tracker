import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
            trim: true,
            minLength: 4,
            maxLength: 40,
            lowercase: true,
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
            trim: true,
            minLength: 4,
            maxLength: 40,
            lowercase: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, 'Invalid email format'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            trim: true,
            minLength: 4,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
