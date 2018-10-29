module.exports = {
    database: "ntask_test",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        define: {
            underscored: true
        }
    },
    jwtSecret: "NTASK_TEST",
    jwtSession: { session: false }
};