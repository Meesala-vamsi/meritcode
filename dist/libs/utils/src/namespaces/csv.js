"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseCSV", {
    enumerable: true,
    get: function() {
        return parseCSV;
    }
});
const _interop_require_default = require("@swc/helpers/_/_interop_require_default");
const _papaparse = /*#__PURE__*/ _interop_require_default._(require("papaparse"));
const parseCSV = async (string)=>{
    return new Promise((resolve, reject)=>{
        _papaparse.default.parse(string, {
            header: true,
            skipEmptyLines: true,
            complete: (results)=>resolve(results.data),
            error: (error)=>reject(error)
        });
    });
};

//# sourceMappingURL=csv.js.map