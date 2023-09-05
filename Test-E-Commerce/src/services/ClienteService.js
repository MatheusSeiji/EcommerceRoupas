const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM clientes", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },

  searchOne: (idcliente) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM clientes WHERE idcliente = ?",
        [idcliente],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else {
            aceito(false);
          }
        }
      );
    });
  },

  insert: (nome, email, endereço) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO clientes (nome, email, endereço) VALUES (?, ?, ?)",
        [nome, email, endereço],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertCodigo);
        }
      );
    });
  },

  alterar: (codigo, nome, email, endereço) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE clientes SET nome = ?, email = ?, endereço ? WHERE codigo = ?)",
        [nome, email, endereço],
        codigo,
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },
};
