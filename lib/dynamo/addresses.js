import uuid from 'uuid/v1';
import * as db from './dynamo';

const TableName = 'addresses';


export function getAddresses() {
  const params = {
    TableName,
    AttributesToGet: [
      'id',
      'city',
      'street',
      'cep',
      'complement',
      'neighbourhood',
      'number',
      'state',
    ],
  };
  
  return db.scan(params);
}

export function getAddressById(id) {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  return db.get(params);
}

export function createAddress(args) {
  const params = {
    TableName,
    Item: {
      id: uuid(),
      city: args.city, 
      street: args.street, 
      cep: args.cep, 
      complement: args.complement, 
      neighbourhood: args.neighbourhood, 
      number: args.number, 
      state: args.state, 
    },
  };

  return db.createItem(params);
}

export function updateAddress(args) {
  const params = {
    TableName: 'addresses',
    Key: {
      id: args.id,
    },
    ExpressionAttributeValues: {
      ':city': args.city, 
      ':street': args.street, 
      ':cep': args.cep, 
      ':complement': args.complement, 
      ':neighbourhood': args.neighbourhood, 
      ':number': args.number, 
      ':state': args.state, 
    },
    UpdateExpression: 'SET city = :city, street = :street, cep = :cep, complement = :complement, neighbourhood = :neighbourhood, number = :number, state = :state',
    ReturnValues: 'ALL_NEW',
  };

  return db.updateItem(params, args);
}

export function deleteAddress(args) {
  const params = {
    TableName,
    Key: {
      id: args.id,
    },
  };

  return db.deleteItem(params, args);
}
