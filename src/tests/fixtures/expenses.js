// Default testing expense object.
import moment from "moment";

const expenses = [{
    id: 1, description: "Philosophy cafe", amount: 698300,
    createdAt: moment(0),
    note: ""
}, {
    id: 2, description: "Louisa Coffee", amount: 7000,
    createdAt: moment(0).add(2, "days").valueOf(),
    note: "Cafe for working"
}, {
    id: 3, description: "Cheese cake", amount: 567388,
    createdAt: moment(0).add(4, "days").valueOf(),
    note: "Buy birthday gift"
}];

export { expenses };