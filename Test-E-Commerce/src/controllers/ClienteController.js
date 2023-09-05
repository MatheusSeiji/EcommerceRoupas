const ClienteService = require('../services/ClienteService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error: '', result:[]};

        let cliente = await ClienteService.buscarTodos();

        for(let i in cliente){
            json.result.push({
                codigo: cliente[i].codigo,
                descricao: cliente[i].nome
            });
        }
        res.json(json);
    },

    searchOne: async(rec, res) => {
        let json = {error: '', result:{}};

        let idcliente= req.params.idcliente;
        let cliente = await ClienteService.searchOne(idcliente);

        if(cliente){
           json.result = cliente;
        } 

        res.json(json);
    }

    }