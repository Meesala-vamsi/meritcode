"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "profileSchema", {
    enumerable: true,
    get: function() {
        return profileSchema;
    }
});
const _zod = require("zod");
const profileSchema = _zod.z.object({
    "First Name": _zod.z.string(),
    "Last Name": _zod.z.string(),
    "Maiden Name": _zod.z.string().optional(),
    Address: _zod.z.string(),
    "Birth Date": _zod.z.string(),
    Headline: _zod.z.string(),
    Summary: _zod.z.string(),
    Industry: _zod.z.string(),
    "Zip Code": _zod.z.string().optional(),
    "Geo Location": _zod.z.string(),
    "Twitter Handles": _zod.z.string(),
    Websites: _zod.z.string(),
    "Instant Messengers": _zod.z.string().optional()
});

//# sourceMappingURL=profile.js.map