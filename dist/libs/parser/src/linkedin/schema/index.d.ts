import { z } from "zod";
export declare const linkedInSchema: z.ZodObject<{
    Profile: z.ZodOptional<z.ZodArray<z.ZodObject<{
        "First Name": z.ZodString;
        "Last Name": z.ZodString;
        "Maiden Name": z.ZodOptional<z.ZodString>;
        Address: z.ZodString;
        "Birth Date": z.ZodString;
        Headline: z.ZodString;
        Summary: z.ZodString;
        Industry: z.ZodString;
        "Zip Code": z.ZodOptional<z.ZodString>;
        "Geo Location": z.ZodString;
        "Twitter Handles": z.ZodString;
        Websites: z.ZodString;
        "Instant Messengers": z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        "First Name": string;
        "Last Name": string;
        Address: string;
        "Birth Date": string;
        Headline: string;
        Summary: string;
        Industry: string;
        "Geo Location": string;
        "Twitter Handles": string;
        Websites: string;
        "Maiden Name"?: string | undefined;
        "Zip Code"?: string | undefined;
        "Instant Messengers"?: string | undefined;
    }, {
        "First Name": string;
        "Last Name": string;
        Address: string;
        "Birth Date": string;
        Headline: string;
        Summary: string;
        Industry: string;
        "Geo Location": string;
        "Twitter Handles": string;
        Websites: string;
        "Maiden Name"?: string | undefined;
        "Zip Code"?: string | undefined;
        "Instant Messengers"?: string | undefined;
    }>, "many">>;
    "Email Addresses": z.ZodOptional<z.ZodArray<z.ZodObject<{
        "Email Address": z.ZodString;
        Confirmed: z.ZodEnum<["Yes", "No"]>;
        Primary: z.ZodEnum<["Yes", "No"]>;
        "Updated On": z.ZodString;
    }, "strip", z.ZodTypeAny, {
        "Email Address": string;
        Confirmed: "Yes" | "No";
        Primary: "Yes" | "No";
        "Updated On": string;
    }, {
        "Email Address": string;
        Confirmed: "Yes" | "No";
        Primary: "Yes" | "No";
        "Updated On": string;
    }>, "many">>;
    Certifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
        Name: z.ZodString;
        Url: z.ZodString;
        Authority: z.ZodString;
        "Started On": z.ZodString;
        "Finished On": z.ZodOptional<z.ZodString>;
        "License Number": z.ZodString;
    }, "strip", z.ZodTypeAny, {
        Name: string;
        Url: string;
        Authority: string;
        "Started On": string;
        "License Number": string;
        "Finished On"?: string | undefined;
    }, {
        Name: string;
        Url: string;
        Authority: string;
        "Started On": string;
        "License Number": string;
        "Finished On"?: string | undefined;
    }>, "many">>;
    Education: z.ZodOptional<z.ZodArray<z.ZodObject<{
        "School Name": z.ZodString;
        "Start Date": z.ZodString;
        "End Date": z.ZodString;
        Notes: z.ZodOptional<z.ZodString>;
        "Degree Name": z.ZodString;
        Activities: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        "School Name": string;
        "Start Date": string;
        "End Date": string;
        "Degree Name": string;
        Activities: string;
        Notes?: string | undefined;
    }, {
        "School Name": string;
        "Start Date": string;
        "End Date": string;
        "Degree Name": string;
        Activities: string;
        Notes?: string | undefined;
    }>, "many">>;
    Languages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        Name: z.ZodString;
        Proficiency: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        Name: string;
        Proficiency?: string | undefined;
    }, {
        Name: string;
        Proficiency?: string | undefined;
    }>, "many">>;
    Positions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        "Company Name": z.ZodString;
        Title: z.ZodString;
        Description: z.ZodOptional<z.ZodString>;
        Location: z.ZodString;
        "Started On": z.ZodString;
        "Finished On": z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        "Started On": string;
        "Company Name": string;
        Title: string;
        Location: string;
        Description?: string | undefined;
        "Finished On"?: string | undefined;
    }, {
        "Started On": string;
        "Company Name": string;
        Title: string;
        Location: string;
        Description?: string | undefined;
        "Finished On"?: string | undefined;
    }>, "many">>;
    Projects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        Title: z.ZodString;
        Description: z.ZodString;
        Url: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>>;
        "Started On": z.ZodString;
        "Finished On": z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        "Started On": string;
        Title: string;
        Description: string;
        Url?: string | undefined;
        "Finished On"?: string | undefined;
    }, {
        "Started On": string;
        Title: string;
        Description: string;
        Url?: string | undefined;
        "Finished On"?: string | undefined;
    }>, "many">>;
    Skills: z.ZodOptional<z.ZodArray<z.ZodObject<{
        Name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        Name: string;
    }, {
        Name: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    Profile?: {
        "First Name": string;
        "Last Name": string;
        Address: string;
        "Birth Date": string;
        Headline: string;
        Summary: string;
        Industry: string;
        "Geo Location": string;
        "Twitter Handles": string;
        Websites: string;
        "Maiden Name"?: string | undefined;
        "Zip Code"?: string | undefined;
        "Instant Messengers"?: string | undefined;
    }[] | undefined;
    "Email Addresses"?: {
        "Email Address": string;
        Confirmed: "Yes" | "No";
        Primary: "Yes" | "No";
        "Updated On": string;
    }[] | undefined;
    Certifications?: {
        Name: string;
        Url: string;
        Authority: string;
        "Started On": string;
        "License Number": string;
        "Finished On"?: string | undefined;
    }[] | undefined;
    Education?: {
        "School Name": string;
        "Start Date": string;
        "End Date": string;
        "Degree Name": string;
        Activities: string;
        Notes?: string | undefined;
    }[] | undefined;
    Languages?: {
        Name: string;
        Proficiency?: string | undefined;
    }[] | undefined;
    Positions?: {
        "Started On": string;
        "Company Name": string;
        Title: string;
        Location: string;
        Description?: string | undefined;
        "Finished On"?: string | undefined;
    }[] | undefined;
    Projects?: {
        "Started On": string;
        Title: string;
        Description: string;
        Url?: string | undefined;
        "Finished On"?: string | undefined;
    }[] | undefined;
    Skills?: {
        Name: string;
    }[] | undefined;
}, {
    Profile?: {
        "First Name": string;
        "Last Name": string;
        Address: string;
        "Birth Date": string;
        Headline: string;
        Summary: string;
        Industry: string;
        "Geo Location": string;
        "Twitter Handles": string;
        Websites: string;
        "Maiden Name"?: string | undefined;
        "Zip Code"?: string | undefined;
        "Instant Messengers"?: string | undefined;
    }[] | undefined;
    "Email Addresses"?: {
        "Email Address": string;
        Confirmed: "Yes" | "No";
        Primary: "Yes" | "No";
        "Updated On": string;
    }[] | undefined;
    Certifications?: {
        Name: string;
        Url: string;
        Authority: string;
        "Started On": string;
        "License Number": string;
        "Finished On"?: string | undefined;
    }[] | undefined;
    Education?: {
        "School Name": string;
        "Start Date": string;
        "End Date": string;
        "Degree Name": string;
        Activities: string;
        Notes?: string | undefined;
    }[] | undefined;
    Languages?: {
        Name: string;
        Proficiency?: string | undefined;
    }[] | undefined;
    Positions?: {
        "Started On": string;
        "Company Name": string;
        Title: string;
        Location: string;
        Description?: string | undefined;
        "Finished On"?: string | undefined;
    }[] | undefined;
    Projects?: {
        "Started On": string;
        Title: string;
        Description: string;
        Url?: string | undefined;
        "Finished On"?: string | undefined;
    }[] | undefined;
    Skills?: {
        Name: string;
    }[] | undefined;
}>;
export type LinkedIn = z.infer<typeof linkedInSchema>;
