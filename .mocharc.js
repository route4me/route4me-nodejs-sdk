'use strict'

module.exports = {  
    reporter: "spec",
    recursive: true,
    checkLeaks: true,
    ui: "bdd",
    require: ["test/bootstrap"],
    spec: ["test/**/*.spec.js", "test/**/*.test.js"]
};