"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseServer = /** @class */ (function () {
    function CreateCourseServer() {
    }
    CreateCourseServer.prototype.execute = function (_a) {
        var name = _a.name, _b = _a.duration, duration = _b === void 0 ? 8 : _b, educator = _a.educator;
        console.log(name, duration, educator);
    };
    return CreateCourseServer;
}());
exports.default = new CreateCourseServer();
