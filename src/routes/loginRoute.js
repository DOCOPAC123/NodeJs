const loginRoute = (app) => {
    console.log("went to login route");
    app.route('/login')
        .post((req, res) => {
            console.log("went inside to login route");
            console.log(req.body);
            res.send(req.body);
        })
}
export default loginRoute;