require('dotenv').config();

const CustomerService = require('../service/customer.service');

const getAll = async (_req, res) => {
    const getAllProducts = await CustomerService.getAll();
    return res.status(200).json(getAllProducts);
};

const getOne = async (req, res) => {
    const { id } = req.headers; 
    const getProductToCart = await CustomerService.getOne(id);
    return res.status(200).json(getProductToCart);
};

const checkout = async (req, res) => {
    const shoppingData = req.body;
    const { productList } = shoppingData;
    delete shoppingData.productList;

    const getCheckout = await CustomerService.checkout(shoppingData);
    const orderId = getCheckout.dataValues.id;

    productList.map(
         async (newProduct) => CustomerService
         .createSaleProduct({ ...newProduct, saleId: orderId }),
        );

    return res.status(201).json(orderId);
};

const getCustumerOrders = async (req, res) => {
    const { id: userId } = req.headers;
    const getOrders = await CustomerService.getCustomerOrders(userId);
    // console.log('getCustomersOrder', getCustumerOrders);
    return res.status(201).json(getOrders);
};

const getOrder = async (req, res) => {
    const { id } = req.params;
    const getOrderDetails = await CustomerService.getOrder(id);
    return res.status(200).json(getOrderDetails);
};

const modifyOrderStatus = async (req, res) => {
    const { status, orderId } = req.headers;
    const updateStatus = await CustomerService.modifyOrderStatus(status, orderId);
    res.status(201).json(updateStatus);
};

module.exports = {
    getAll,
    getOne,
    checkout,
    getCustumerOrders,
    getOrder,
    modifyOrderStatus,
 };
