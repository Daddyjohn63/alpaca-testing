import * as z from "zod";

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum of 6 characters required"
    })
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
})


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
    code: z.optional(z.string()),
})


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    }),

})

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6))
})
.refine((data) => {

    if(data.password && !data.newPassword) {
        return false
    }

    if(data.newPassword && !data.password) {
        return false;
    }

    return true;
}, {
    message: "New password is required",
    path: ["newPassword"]
})
.refine((data) => {
    if(data.newPassword && !data.password) {
        return false
    }

    return true;
}, {
    message: "Password is required",
    path: ["password"]
})

const MAX_FILE_SIZE = 5000000; //5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const AddPostSchema = z.object({
    title: z.string().min(1, "A title is required."),
    slug: z.string().min(1, "A url slug is required"),
    status: z.string().min(1, "Must select an option"),
    category: z.string().min(1, "Must select an option."),
    image: z
        .custom<File>()
        .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 5MB.")
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .webp formats are supported.")

})
