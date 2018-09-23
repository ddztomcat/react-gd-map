module.exports = function () {
    return [
        require("./webpack.browser"),
        require("./webpack.server")
    ];
};
