module.exports = app => {

    if (process.env.NODE_ENV !== 'test') {
        const port = app.get('port');
        app.db.sequelize.sync().done(() => {
            app.listen(port, () => {
                console.log(`NTask API - Port ${port}`);
            });
        });
    }
};