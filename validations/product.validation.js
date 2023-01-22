export const productValidSchema = {
    body: {
        type: "object",
        required: ["name", "description", "price", "stock", "category"],
        properties: {
            name: {
                type: "string",
            },
            description: {
                type: "string",
            },
            rate: {
                type: "number",
                minimum: 0,
                maximum: 5,
            },
            price: {
                type: "number",
            },
            stock: {
                type: "number",
            },
            category: {
                type: "string"
            },
        },
    },
};