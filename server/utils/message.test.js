var expect = require("expect");
var { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
    it("should generate the correct message object", () => {
        var from = "Bob";
        var text = "My message";
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe("number");
        expect(message).toMatchObject({ from, text });
    });
});

describe("generate location message", () => {
    it("should generate correct location object", () => {
        var from = "Admin";
        var lat = 1;
        var lon = 1;
        var message = generateLocationMessage(from, lat, lon);
        expect(message).toMatchObject({
            from,
            url: "https://www.google.com/maps?q=1,1"
        });
        expect(typeof message.createdAt).toBe("number");
    });
});
