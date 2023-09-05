const ClienteService = require("../services/ClienteService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let cliente = await ClienteService.buscarTodos();

    for (let i in cliente) {
      json.result.push({
        codigo: cliente[i].codigo,
        descricao: cliente[i].nome,
      });
    }
    res.json(json);
  },

  searchOne: async (rec, res) => {
    let json = { error: "", result: {} };

    let idcliente = req.params.idcliente;
    let cliente = await ClienteService.searchOne(idcliente);

    if (cliente) {
      json.result = cliente;
    }

    res.json(json);
  },

  insert: async (rec, res) => {
    let json = { error: "", result: {} };

    let nome = req.body.nome;
    let email = req.body.email;
    let endereço = req.bady.endereço;

    if (nome && email && endereço) {
      let clienteCodigo = await ClienteService.insert(nome, email, endereço);
      json.result = {
        codigo: clienteCodigo,
        nome,
        email,
        endereço,
      };
    } else {
      json.error = "Campos não enviados";
    }

    res.json(json);
  },

  alterar: async (rec, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;
    let nome = req.body.nome;
    let email = req.body.email;
    let endereço = req.bady.endereço;

    if (codigo && nome && email && endereço) {
      await ClienteService.alterar(nome, email, endereço);
      json.result = {
        codigo,
        nome,
        email,
        endereço,
      };
    } else {
      json.error = "Campos não enviados";
    }

    res.json(json);
  },

  deletar: async (req, res) => {
    let json = { error: "", result: {} };

    await ClienteService.deletar(req.params.codigo);

    res.json(json);
  },
};
