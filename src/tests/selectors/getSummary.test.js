import { getExpenseTotal } from "../../selectors/getSummary";
import { expenses as defaultExp } from "../fixtures/expenses";

describe("Function getSummary behavior.", () => {

    it("should return 0 when no expense.", () => {
        expect(getExpenseTotal([])).toBe(0);
    });

    it("should correctly add up 1 expense.", () => {
        const result = getExpenseTotal([defaultExp[1]]);
        expect(result).toBe(defaultExp[1].amount);
    });

    it("should correctly add up 2 expenses.", () => {
        const result = getExpenseTotal(defaultExp);
        expect(result).toBe(defaultExpTotal());
    });

    function defaultExpTotal() {
        if (defaultExp === []) {
            console.log("Zero visible expense data.");
        }
        let result = 0;
        defaultExp.forEach((item) => {
            result += item.amount;
        });
        return result;
    }

});