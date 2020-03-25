const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota/ Recursos
 */

 /**
  * Metodos HTTP:
  * 
  * GET: Buscar /Listar uma informacao do back-end
  * POST: Criar uma informacao no back-end
  * PUT: Alterar uma informacao no back-end
  * DELETE: Deleta uma informacao no back-end
  */

  /**
   * Tipos de parametros:
   * 
   * Query Params: Parametros nomeados enviados na rota apos "?" e servem para (Filtros, paginação)
   * Route Params: Paramentros utilizados para identificar recursos
   * Request Body: Corpo de requisicao, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsft SQL Server
    * NoSQL: MongoDB, COuchDB...
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */
  

 
app.listen(3333);