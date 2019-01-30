const expect = require("expect");
const { isRealString } = require("./validation");

describe("isRealString", () => {
    it("should return true if the string is real", () => {
        var text = "  I'm a real string  ";
        expect(isRealString(text)).toBeTruthy();
    });
    it("should reject non string values", () => {
        var text = 99;
        expect(isRealString(text)).toBeFalsy();
    });
    it("should reject strings with all sapces", () => {
        var text = "      ";
        expect(isRealString(text)).toBeFalsy();
    });
});
