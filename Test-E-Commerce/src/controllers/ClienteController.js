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
    }
}