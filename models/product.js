// const db = require("../config/db");

// class Product {
//   constructor(title, url, price, description) {
//     this.title = title;
//     this.url = url;
//     this.price = price;
//     this.description = description;
//   }

//   async save() {
//     let postsql = `INSERT INTO shop(
//       title,
//       url,
//       price,
//       description
//     )
//     VALUES (
//       '${this.title}',
//       '${this.url}',
//       '${this.price}',
//       '${this.description}'
//     )`;
//     const newPost = await db.execute(postsql);
//     return newPost;
//   }

//   static async findAll() {
//     let sql = `SELECT * FROM shop;`;
//     return db.execute(sql);
//   }

//   static async initializeTable() {
//     let createTableSql = `CREATE TABLE IF NOT EXISTS shop (
//       id INT AUTO_INCREMENT,
//       title VARCHAR(255) NOT NULL,
//       url VARCHAR(255) NOT NULL,
//       price DECIMAL(10, 2) NOT NULL,
//       description TEXT NOT NULL,
//       PRIMARY KEY (id)
//     )`;
//     await db.execute(createTableSql);
//   }
// }

// module.exports = Product;

const db = require("../config/db");

class Product {
  constructor(title, url, price, description) {
    this.title = title;
    this.url = url;
    this.price = price;
    this.description = description;
  }

  async save() {
    const sql = `
      INSERT INTO shop (title, url, price, description)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [this.title, this.url, this.price, this.description];
    const { rows } = await db.query(sql, values);
    return rows[0];
  }

  static async findAll() {
    const sql = `SELECT * FROM shop`;
    const { rows } = await db.query(sql);
    return rows;
  }

  static async initializeTable() {
    const createTableSql = `
      CREATE TABLE IF NOT EXISTS shop (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        url VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT NOT NULL
      )
    `;
    await db.query(createTableSql);
  }
}

module.exports = Product;
