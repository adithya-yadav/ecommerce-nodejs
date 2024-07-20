const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.post("/", shopController.postCartProduct);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.removeCart);

// router.get('/cart', shopController.getCartProduct);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
