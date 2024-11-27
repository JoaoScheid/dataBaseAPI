const database = require('./database/connection');

class TaskController {
    novaTarefa(request, response) {
        const { id, nome, data_criacao } = request.body;
        
        console.log(id, nome, data_criacao);

        // Inserindo os dados no banco de dados
        database.insert({ id, nome, data_criacao })
            .table("Usuario")
            .then(data => {
                console.log(data);
                response.json({ message: "Usuário criado com sucesso!" });
            })
            .catch(error => {
                console.log(error);
                response.status(500).json({ message: "Erro ao criar usuário", error: error.message });
            });
    }

    listarUsers(request, response) {
        database.select("*").table("Usuario").then(data => {
                console.log(data);
                response.json(data);
            })
            .catch(error => {
                console.log(error);
                response.status(500).json({ message: "Erro ao listar usuários", error: error.message });
            });
    }

    listarUser(request, response) {
        const {id} = request.params;

        database.select("*").table("Usuario").where({id}).then(data => {
                console.log(data);
                response.json(data);
            })
            .catch(error => {
                console.log(error);
                response.status(500).json({ message: "Erro ao listar usuários", error: error.message });
            });
    }

    listarUser(request, response) {
        const {id} = request.params;

        database.select("*").table("Usuario").where({id}).then(data => {
                console.log(data);
                response.json(data);
            })
            .catch(error => {
                console.log(error);
                response.status(500).json({ message: "Erro ao listar usuário", error: error.message });
            });
    }

    atualizarUser(request, response) {
        const {id} = request.params;
        const {nome} =request.body;
        

        database.where({id}).update({nome}).table("Usuario").then(data => {
                response.json({message:"Usuario atualizado com sucesso"});
            })
            .catch(error => {
                console.log(error);
                response.status(500).json({ message: "Erro ao atualizar usuários", error: error.message });
            });
    }

    removerUser(request, response) {
        const {id} = request.params;
        
        

        database.where({id}).del().table("Usuario").then(data => {
                response.json({message:"Tarefa removida com sucesso"});
            })
            .catch(error => {
                console.log(error);
                response.status(500).json({ message: "Erro ao remover usuario", error: error.message });
            });
    }
}

module.exports = new TaskController();
