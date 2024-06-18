
const productsModel = () => {
    return [
        { header: "Name", key: "name", width: 15 },
        { header: "description", key: "description", width: 30 },
        { header: "price", key: "price", width: 30 },
        { header: "category_id", key: "category_id", width: 40 },
        { header: "sku", key: "sku", width: 20 },
        { header: "stock", key: "stock", width: 20 },
    ];
};

export default productsModel;