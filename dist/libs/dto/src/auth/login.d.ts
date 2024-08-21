import { z } from "nestjs-zod/z";
export declare const loginSchema: z.ZodEffects<z.ZodObject<{
    identifier: z.ZodString;
    password: z.ZodPassword;
    recaptchaToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    identifier: string;
    recaptchaToken: string;
}, {
    password: string;
    identifier: string;
    recaptchaToken: string;
}>, {
    password: string;
    identifier: string;
    recaptchaToken: string;
}, {
    password: string;
    identifier: string;
    recaptchaToken: string;
}>;
declare const LoginDto_base: import("nestjs-zod/dto").ZodDto<{
    password: string;
    identifier: string;
    recaptchaToken: string;
}, z.ZodEffectsDef<z.ZodObject<{
    identifier: z.ZodString;
    password: z.ZodPassword;
    recaptchaToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    identifier: string;
    recaptchaToken: string;
}, {
    password: string;
    identifier: string;
    recaptchaToken: string;
}>>, {
    password: string;
    identifier: string;
    recaptchaToken: string;
}>;
export declare class LoginDto extends LoginDto_base {
}
export {};
