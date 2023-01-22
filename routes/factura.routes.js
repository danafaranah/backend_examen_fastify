import facturaCtrl from "../controllers/Factura.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { facturaValidSchema } from "../validations/factura.validation.js"

const route = (fastify, opts, done) => {
    fastify.get("/", facturaCtrl.listAll);
    fastify.get("/:id", facturaCtrl.listById);
    fastify.post(
        "/", {
            schema: facturaValidSchema,
            preValidation: [verifyToken],
        },
        facturaCtrl.create
    );
    fastify.delete(
        "/:id", {
            preHandler: [verifyToken],
        },
        facturaCtrl.delete
    );
    fastify.put(
        "/:id", {
            preHandler: [verifyToken],
        },
        facturaCtrl.update
    );

    done()
};

export default route;