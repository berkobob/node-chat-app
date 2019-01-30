const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: 1,
                name: "Bob",
                room: "Node course"
            },
            {
                id: 2,
                name: "Bill",
                room: "React course"
            },
            {
                id: 3,
                name: "Bruce",
                room: "Node course"
            }
        ];
    });

    it("should add new user", () => {
        var users = new Users();
        var user = {
            id: "123",
            name: "Antoine",
            room: "Devs"
        };
        var response = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it("should return names for node course", () => {
        var userList = users.getUserList("Node course");
        expect(userList).toEqual(["Bob", "Bruce"]);
    });

    it("should return names for react course", () => {
        var userList = users.getUserList("React course");
        expect(userList).toEqual(["Bill"]);
    });

    it("should remove a user", () => {
        var user = users.removeUser(3);
        expect(user).toBeTruthy();
        expect(users.users.length).toBe(2);
    });

    it("should not remove user", () => {
        var user = users.removeUser(4);
        expect(user.length).toBe(0);
        expect(users.users.length).toBe(3);
    });

    it("should find user", () => {
        var user = users.getUser(2);
        expect(user).toMatchObject([
            {
                id: 2,
                name: "Bill",
                room: "React course"
            }
        ]);
    });

    it("should not find user", () => {
        var user = users.getUser(4);
        expect(user).toEqual([]);
    });
});
