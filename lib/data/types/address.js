export default `
  type Address {
    id: ID!
    city: String
    street: String
    cep: String
    complement: String
    neighbourhood: String
    number: String
    state: String
  }

  type Query {
    addresses: [Address]
    address(id: ID!): Address
  }

  type Mutation {
    createAddress(
      city: String!
      street: String!
      cep: String!
      complement: String!
      neighbourhood: String!
      number: String!
      state: String!
    ): Address
    updateAddress(
      id: ID!
      city: String!
      street: String!
      cep: String!
      complement: String!
      neighbourhood: String!
      number: String!
      state: String!
    ): Address
    deleteAddress(
      id: ID!
    ): Address
  }
`;