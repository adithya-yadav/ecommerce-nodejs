// const Product = require("../models/product");
// const Cart = require("../models/cart");

// exports.getProducts = async (req, res, next) => {
//   try {
//     await Product.initializeTable();
//     const products = await Product.findAll();
//     res.render("shop/product-list", {
//       prods: products[0].length > 0 ? products[0] : [],
//       pageTitle: "All Products",
//       path: "/products",
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// exports.postProduct = async (req, res, next) => {
//   try {
//     await Product.initializeTable();
//     const { title, url, price, description } = req.body;
//     let product = new Product(title, url, parseFloat(price), description);
//     await product.save();
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// exports.postCartProduct = async (req, res, next) => {
//   try {
//     await Cart.initializeTable();
//     const cartdata = await Cart.findAll();
//     const { id, title, url, price, description } = req.body;
//     const ind = cartdata[0].findIndex((item) => item.id == id);
//     if (ind > -1) {
//       await Product.initializeTable();
//       const products = await Product.findAll();
//       res.render("shop/index", {
//         prods: products[0],
//         pageTitle: "Shop",
//         path: "/",
//         popUp: true,
//       });
//     } else {
//       let carts = new Cart(
//         parseInt(id),
//         title,
//         url,
//         parseFloat(price),
//         description
//       );
//       await carts.save();
//       res.redirect("/");
//     }
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// exports.removeCart = async (req, res, next) => {
//   try {
//     await Cart.initializeTable();
//     const { id } = req.body;
//     let carts = new Cart(parseInt(id));
//     await carts.delete();
//     res.redirect("/cart");
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// exports.getIndex = async (req, res, next) => {
//   try {
//     await Product.initializeTable();
//     const products = await Product.findAll();
//     res.render("shop/index", {
//       prods: products[0]?.length > 0 ? products[0] : [],
//       pageTitle: "Shop",
//       path: "/",
//       popUp: false,
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// exports.getCart = async (req, res, next) => {
//   try {
//     await Cart.initializeTable();
//     const carts = await Cart.findAll();
//     res.render("shop/cart", {
//       path: "/cart",
//       pageTitle: "Your Cart",
//       prods: carts[0],
//     });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// exports.getOrders = (req, res, next) => {
//   res.render("shop/orders", {
//     path: "/orders",
//     pageTitle: "Your Orders",
//   });
// };

// exports.getCheckout = (req, res, next) => {
//   res.render("shop/checkout", {
//     path: "/checkout",
//     pageTitle: "Checkout",
//   });
// };

const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = async (req, res, next) => {
  try {
    await Product.initializeTable();
    const products = await Product.findAll();
    console.log(products, "proo@@@@@@@");
    res.render("shop/product-list", {
      prods: products?.length > 0 ? products : [],
      pageTitle: "All Products",
      path: "/products",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.postProduct = async (req, res, next) => {
  try {
    await Product.initializeTable();
    const { title, url, price, description } = req.body;
    let product = new Product(title, url, parseFloat(price), description);
    await product.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.postCartProduct = async (req, res, next) => {
  try {
    await Cart.initializeTable();
    const cartdata = await Cart.findAll();
    const { id, title, url, price, description } = req.body;
    const ind = cartdata.findIndex((item) => item.id == id);
    if (ind > -1) {
      await Product.initializeTable();
      const products = await Product.findAll();
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        popUp: true,
      });
    } else {
      let carts = new Cart(
        parseInt(id),
        title,
        url,
        parseFloat(price),
        description
      );
      await carts.save();
      res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.removeCart = async (req, res, next) => {
  try {
    await Cart.initializeTable();
    const { id } = req.body;
    let carts = new Cart(parseInt(id));
    await carts.delete();
    res.redirect("/cart");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getIndex = async (req, res, next) => {
  try {
    await Product.initializeTable();
    const products = await Product.findAll();
    console.log(products, "pro########");
    res.render("shop/index", {
      prods: products?.length > 0 ? products : [],
      pageTitle: "Shop",
      path: "/",
      popUp: false,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    await Cart.initializeTable();
    const carts = await Cart.findAll();
    res.render("shop/cart", {
      path: "/cart",
      pageTitle: "Your Cart",
      prods: carts,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
