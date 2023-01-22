import categoryCtrl from "../controllers/Category.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";
import { categoryValidSchema } from "../validations/category.validation.js"

const route = (fastify, opts, done) => {

    fastify.get("/", categoryCtrl.listAll);
    fastify.get("/:id", categoryCtrl.listById);
    fastify.post("/", { schema: categoryValidSchema, preValidation: [verifyToken, upload.single("img")] }, categoryCtrl.create);
    fastify.delete("/:id", { preHandler: [verifyToken] }, categoryCtrl.delete);
    fastify.put("/:id", { preHandler: [verifyToken, upload.single("img")] }, categoryCtrl.update);

    done()
}


export default route;