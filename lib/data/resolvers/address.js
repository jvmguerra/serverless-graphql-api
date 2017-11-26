import * as dbAddresses from '../../dynamo/addresses';

export default {
  Query: {
    addresses: () => dbAddresses.getAddresses(),
    address: (_, args) => dbAddresses.getAddressById(args.id),
  },
  Mutation: {
    createAddress: (_, args) => dbAddresses.createAddress(args),
    updateAddress: (_, args) => dbAddresses.updateAddress(args),
    deleteAddress: (_, args) => dbAddresses.deleteAddress(args),
  }
};