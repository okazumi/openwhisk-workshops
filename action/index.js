function myAction(params) {
    const leftPad = require("left-pad");
    const lines = params.lines || [];

    return { padded: lines.map(l => leftPad(l, 30, ".")) }
}

exports.main = myAction;