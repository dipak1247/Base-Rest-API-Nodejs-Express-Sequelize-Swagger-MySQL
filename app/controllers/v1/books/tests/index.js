'use strict';

const Books = require('../lib');

const books = new Books();

const expect = require('chai').expect;

module.exports = () => {
  const item = {
    name    : 'Dipak',
    title : 'Electronics',
    price    : 500
  };

  const modifiedItem = {
    name    : 'Dipak Kumar Sahoo',
    category : 'Electronics & technology',
    price    : 600
  };

  let itemId;

  describe('Books', () => {
    it('add an item', () => books
      .add(item)
      .then((data) => {
        itemId = data.dataValues.id;

        expect(data.dataValues)
          .to.be.an('object')
          .to.include.keys('id');
      })
    );

    it('list all items', () => books
      .list()
      .then((data) => {
        expect(data)
          .to.be.an('array')
          .to.have.length.of.at.least(1);
      })
    );

    it('get item', () => books
      .get(itemId)
      .then((data) => {
        expect(data.dataValues)
          .to.be.an('object')
          .to.include.keys('id');
      })
    );

    it('update item', () => books
      .update(itemId, modifiedItem)
      .then((data) => {
        expect(data[0])
          .to.equal(1);
      })
    );

    it('remove item', () => books
      .remove(itemId)
      .then((data) => {
        expect(data)
          .to.equal(1);
      })
    );
  });
};
