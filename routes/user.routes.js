import userCtrl from "../controllers/user.controller.js";
import { userValidSchema } from "../validations/user.validation.js";

const route = (fastify, opts, done) => {
    fastify.post("/register", { schema: userValidSchema }, userCtrl.register);
    fastify.post("/login", userCtrl.login);
    done()
}


export default route;