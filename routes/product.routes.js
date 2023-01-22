import productCtrl from "../controllers/Product.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../middlewares/imgUpload.js";
import { productValidSchema } from "../validations/product.validation.js"

const route = (fastify, opts, done) => {
    fastify.get("/", productCtrl.listAll);
    fastify.get("/:id", productCtrl.listById);
    fastify.post(
        "/", {
            schema: productValidSchema,
            preValidation: [verifyToken, upload.single("img")],
        },
        productCtrl.create
    );
    fastify.delete(
        "/:id", {
            preHandler: [verifyToken],
        },
        productCtrl.delete
    );
    fastify.put(
        "/:id", {
            preHandler: [verifyToken, upload.single("img")],
        },


        productCtrl.update
    );

    done();
};

export default route;