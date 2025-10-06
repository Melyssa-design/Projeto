const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// CONFIGURAÇÃO DO BANCO DE DADOS
const sequelize = new Sequelize('BackEnd', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

const Funcionario = sequelize.define('Funcionario',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    data_de_nascimento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    salario: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

})

const Produto = sequelize.define('Produto',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    validade: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const Clientes = sequelize.define('Cliente',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    datadeNascimento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    protocoloDeAtendimento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

const app = express(); // INICIALIZA O EXPRESS
app.use(cors()); // PERMITE QUE API ACEITE CONEXÃO DO FRONT-END.
app.use(express.json()); // HABILITA O EXPRESS PARA ENTENDER REQUISIÇÕES COM JSON;

const port = 3000; // PORTA QUE A APLICAÇÃO VAI RODAR

// ROTA DE TESTE
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

// ROTA PARA LISTAR TODOS OS FUNCIONÁRIOS
app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});

// ROTA PARA CRIAR UM NOVO FUNCIONÁRIO
app.post('/funcionarios', async (req, res) => {
    try {
        const { nome, cpf, rg, data_de_nascimento, email, telefone, matricula, salario} = req.body;
        const novoFuncionario = await Funcionario.create({ nome, cpf, rg, data_de_nascimento, email, telefone, matricula, salario });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(400).json({mensagem: "Funcionario já cadastrado ou dados inválidos."});
    }
});

// ROTA PARA LISTAR TODOS OS PRODUTOS
app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

// ROTA PARA CRIAR UM NOVO PRODUTO
app.post('/produto', async (req, res) => {
    try {
        const {nome, lote, validade} = req.body;
        const novoFuncionario = await Funcionario.create({ nome, lote, validade });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({mensagem: "Produto já cadastrado."});
    }
});

// ROTA PARA LISTAR TODOS OS CLIENTES
app.get('/clientes', async (req, res) => {
    const clientes = await Clientes.findAll();
    res.json(clientes);
});

// ROTA PARA CRIAR UM NOVO CLIENTE
app.post('/cliente', async (req, res) => {
    try {
        const {nome, datadeNascimento, protocoloDeAtendimento} = req.body;
        const novoCliente = await Clientes.create({ nome, datadeNascimento, protocoloDeAtendimento });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({mensagem: "Cliente já cadastrado ou dados inválidos."});
    }
});

// SINCRONIZA O MODELO COM O BANCO DE DADOS E INICIA O SERVIDOR
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`😎 API rodando em http://localhost:${port}`);
        console.log('😎 Conectado ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:');
});
