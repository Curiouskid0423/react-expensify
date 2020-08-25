import authReducer from "../../reducers/auth";

describe("the behavior of authReducer.", () => {

    it("should return accurately when received type LOGIN.",
        () => {
        const uid = "kevinatberkeley";
        const newState = authReducer({}, {
            type: "LOGIN",
            uid
        });

        expect(newState.uid).toEqual(uid);
    });

    it("should return accurately when received type LOGOUT.",
        () => {
        const newState = authReducer(
            { uid: "something" },
            { type: "LOGOUT" }
        );
        expect(newState).toEqual({});
    });

});