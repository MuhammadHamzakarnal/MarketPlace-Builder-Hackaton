export default {
    name: "order",
    title: "Orders",
    type: "document",
    fields: [
      {
        name: "customerName",
        title: "Customer Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "products",
        title: "Ordered Products",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "name", title: "Product Name", type: "string" },
              { name: "price", title: "Price", type: "number" },
              { name: "quantity", title: "Quantity", type: "number" },
              { name: "image", title: "Product Image", type: "image" },  // Added image field
            ],
          },
        ],
      },
      {
        name: "totalAmount",
        title: "Total Amount",
        type: "number",
      },
      {
        name: "status",
        title: "Order Status",
        type: "string",
        options: {
          list: ["Pending", "Shipped", "Delivered", "Cancelled"],
        },
        initialValue: "Pending",
      },
    ],
  };
  