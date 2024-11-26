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
        database.select("*")
            .table("Users")
            .then(users => {
                console.log(users);
                response.json(users);
            })
            .catch(error => {
                console.log(error);
                response.status(500).json({ message: "Erro ao listar usuários", error: error.message });
            });
    }
}

module.exports = new TaskController();
