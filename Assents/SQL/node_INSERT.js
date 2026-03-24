const client = require('./node_connect_BD');

async function insertUser(user) {
    const query = `
        INSERT INTO cadastrados
        (nome_completo, email, telefone, sexo, data_nasc, cidade, login, senha)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;

    const values = [
        user.nome_completo, user.email, user.telefone,
        user.sexo, user.data_nasc, user.cidade,
        user.login, user.senha
    ];

    try {
        const result = await client.query(query, values);
        console.log('Dados inseridos com sucesso!');
        return result;
    } catch (err) {
        console.error('Erro ao inserir dados:', err);
        throw err;
    }
}

module.exports = insertUser;