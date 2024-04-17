"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const port = 80;
const app = (0, _express.default)();
app.use(_express.default.static("public"));
app.get("/", (req, res)=>{
    res.send("Webpage in development!");
});
app.listen(port, ()=>{
    console.log(`WorkMC website listening on port ${port}`);
});
