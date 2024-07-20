const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = async (req, res, next) => {
  try {
    const { title, url, price, description } = req.body;
    let product = new Product(title, url, parseInt(price), description);
    product = product.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};
// exports.postAddProduct = (req, res, next) => {
//   const title = req.body.title;
//   const imageUrl = req.body.imageUrl;
//   const price = req.body.price;
//   const description = req.body.description;
//   const product = new Product(title, imageUrl, description, price);
//   product.save();
//   res.redirect('/');
// };

exports.getProducts = (req, res, next) => {
  console.log("pppppppppppppppppppppppp", products);
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

// const Product = require("../models/product");

// exports.getAddProduct = (req, res, next) => {
//   res.render("admin/add-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//     formsCSS: true,
//     productCSS: true,
//     activeAddProduct: true,
//   });
// };

// exports.postAddProduct = async (req, res, next) => {
//   try {
//     const { title, url, price, description } = req.body;
//     const product = new Product({
//       title: title,
//       url: url,
//       price: parseInt(price),
//       description: description,
//     });
//     await product.save();
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Failed to add product.");
//   }
// };

// exports.getProducts = async (req, res, next) => {
//   try {
//     const products = await Product.find();
//     res.render("admin/products", {
//       prods: products,
//       pageTitle: "Admin Products",
//       path: "/admin/products",
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Failed to fetch products.");
//   }
// };
