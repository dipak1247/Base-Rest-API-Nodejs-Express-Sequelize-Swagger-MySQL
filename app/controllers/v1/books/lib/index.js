'use strict';

const appRoot = require('app-root-path');

const db      = require(`${appRoot}/app/models`);
const Promise = require('bluebird');

/**
 * Class that represents books orchestration trough database
 */
class Books {
  /**
   * Adds a book to database
   *
   * @param {Object} book - book JSON object
   */
  add(book) {
    return new Promise((resolve, reject) => {
      db.Books
        .create(book)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * List all books from database
   *
   * @returns {Array}
   */
  list() {
    return new Promise((resolve, reject) => {
      db.Books
        .findAll()
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Get a specific book
   *
   * @param {Integer} id - book id
   * @returns {Object}
   */
  get(bookId) {
    return new Promise((resolve, reject) => {
      db.Books
        .findOne({
          where : {
            id : bookId
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Removes a book from database
   *
   * @param {Integer} id - book id
   */
  remove(bookId) {
    return new Promise((resolve, reject) => {
      db.Books
        .destroy({
          where : {
            id : bookId
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  /**
   * Update a specific book on database
   *
   * @param {Integer} id - book id
   */
  update(bookId, data) {
    return new Promise((resolve, reject) => {
      db.Books
        .update(data, {
          where : {
            id : bookId
          }
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = Books;
