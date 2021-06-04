const userData = {
    name: "Vasia",
    job: "QA"
};

module.exports = {
    getUser: function (params = {}) {
        return {
            ...userData,
            ...params
        };
    },
};