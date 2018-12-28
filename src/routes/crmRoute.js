import Add from "../controllers/crmController";
import addCustomerDesignation from "../controllers/cdController";
const routes = (app) => {
    app.route('/contact')
        .get((req, res) => {
            res.send("Get method is called");
        })

        .post(Add)

        .delete((req, res) => {
            res.send("Delete method is called");
        })

        .put((req, res) => {
            res.send("Put method is called");
        })

    app.route('/add-designation')
        .post(addCustomerDesignation);
}
export default routes;