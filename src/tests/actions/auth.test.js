/**
 * Test suite for auth action generators.
 */

import {login, logout} from "../../actions/auth";

describe("the behaviors of auth actions.", () => {

    const uid = "somethingelse"
    it("should successfully fire sync Login.", () => {
        const action = login(uid);
        expect(action).toEqual({
            type: "LOGIN", uid
        });
    });

    it("should successfully fire sync Logout.", () => {
        const action = logout();
        expect(action).toEqual({
            type: "LOGOUT"
        });
    });

});