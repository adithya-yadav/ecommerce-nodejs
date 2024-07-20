// const db = require("../config/db");

// class Cart {
//   constructor(id, title, url, price, description) {
//     this.id = id;
//     this.title = title;
//     this.url = url;
//     this.price = price;
//     this.description = description;
//   }

//   async save() {
//     let postsql = `INSERT INTO cart(
//       id,
//       title,
//       url,
//       price,
//       description
//     )
//     VALUES (
//       '${this.id}',
//       '${this.title}',
//       '${this.url}',
//       '${this.price}',
//       '${this.description}'
//     )`;
//     const newPost = await db.execute(postsql);
//     return newPost;
//   }

//   static async findAll() {
//     let sql = `SELECT * FROM cart;`;
//     return db.execute(sql);
//   }

//   async delete() {
//     let deletesql = `DELETE FROM cart WHERE id = ${this.id}`;
//     await db.execute(deletesql);
//   }

//   static async initializeTable() {
//     let createTableSql = `CREATE TABLE IF NOT EXISTS cart (
//       id INT,
//       title VARCHAR(255) NOT NULL,
//       url VARCHAR(255) NOT NULL,
//       price DECIMAL(10, 2) NOT NULL,
//       description TEXT NOT NULL,
//       PRIMARY KEY (id)
//     )`;
//     await db.execute(createTableSql);
//   }
// }

// module.exports = Cart;

const db = require("../config/db");

class Cart {
  constructor(id, title, url, price, description) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.price = price;
    this.description = description;
  }

  async save() {
    const sql = `
      INSERT INTO cart (id, title, url, price, description)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const values = [
      this.id,
      this.title,
      this.url,
      this.price,
      this.description,
    ];
    const { rows } = await db.query(sql, values);
    return rows[0];
  }

  static async findAll() {
    const sql = `SELECT * FROM cart`;
    const { rows } = await db.query(sql);
    return rows;
  }

  async delete() {
    const sql = `DELETE FROM cart WHERE id = $1`;
    await db.query(sql, [this.id]);
  }

  static async initializeTable() {
    const createTableSql = `
      CREATE TABLE IF NOT EXISTS cart (
        id INT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        url VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT NOT NULL
      )
    `;
    await db.query(createTableSql);
  }
}

module.exports = Cart;
