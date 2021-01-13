'use strict';

const Books = require('./lib');

const books = new Books();

/**
 * @swagger
 * definition:
 *   Book:
 *     type: object
 *     required:
 *       - name
 *       - title
 *       - price
 *     properties:
 *       name:
 *         type: string
 *       title:
 *         type: string
 *       price:
 *         type: integer
 */
module.exports = (app) => {
  /**
   * @swagger
   * /v1/books:
   *   post:
   *     summary: Add a book
   *     description: Add a book as a JSON object
   *     tags:
   *       - Books
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: body
   *         name: body
   *         description: "Book object that needs to be added to the store"
   *         required: true
   *         schema:
   *           "$ref": "#/definitions/Book"
   *     responses:
   *       200:
   *         description: "successful operation"
   */
  app.post('/v1/books', (req, res) => {
    books
      .add(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  /**
   * @swagger
   * /v1/books:
   *   get:
   *     summary: List all books
   *     description: List all books as an JSON array
   *     tags:
   *       - Books
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: "successful operation"
   *         schema:
   *           type: array
   *           items:
   *             "$ref": "#/definitions/Book"
   */
  app.get('/v1/books', (req, res) => {
    books
      .list()
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  /**
   * @swagger
   * /v1/books/{id}:
   *   get:
   *     summary: Get a book
   *     description: Get a book
   *     tags:
   *       - Books
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         in: path
   *         description: "book id"
   *         required: true
   *         type: integer
   *     responses:
   *       200:
   *         description: "successful operation"
   *         schema:
   *           "$ref": "#/definitions/Book"
   *       404:
   *         description: "not found"
   *       400:
   *         description: "bad request"
   */
  app.get('/v1/books/:id', (req, res) => {
    books
      .get(req.params.id)
      .then((data) => {
        if (data <= 0) {
          res.sendStatus(404);
        } else {
          res.send(data);
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  /**
   * @swagger
   * /v1/books/{id}:
   *   delete:
   *     summary: Removes a book
   *     description: Removes a book
   *     tags:
   *       - Books
   *     parameters:
   *       - name: id
   *         in: path
   *         description: "book id"
   *         required: true
   *         type: integer
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: "successful operation"
   *       404:
   *         description: "not found"
   *       400:
   *         description: "bad request"
   */
  app.delete('/v1/books/:id', (req, res) => {
    books
      .remove(req.params.id)
      .then((data) => {
        if (data <= 0) {
          res.sendStatus(404);
        } else {
          res.send({
            success : true
          });
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });

  /**
   * @swagger
   * /v1/books/{id}:
   *   patch:
   *     summary: Update a book
   *     description: Update a book
   *     tags:
   *       - Books
   *     parameters:
   *       - name: id
   *         in: path
   *         description: "book id"
   *         required: true
   *         type: integer
   *       - in: body
   *         name: body
   *         description: "Book object that needs to be added to the store"
   *         required: true
   *         schema:
   *           "$ref": "#/definitions/Book"
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: "successful operation"
   *       404:
   *         description: "not found"
   *       400:
   *         description: "bad request"
   */
  app.patch('/v1/books/:id', (req, res) => {
    books
      .update(req.params.id, req.body)
      .then((data) => {
        if (data <= 0) {
          res.sendStatus(404);
        } else {
          res.send({
            success : true
          });
        }
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });
};
