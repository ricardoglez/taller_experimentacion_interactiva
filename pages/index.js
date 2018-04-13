import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';

const link = new HttpLink({ uri: 'localhost:4000/graphql' })


const client = new ApolloClient({
  link,
});


client
  .query({
    query: gql`
      {
        hello
      }
    `
  })
  .then(data => console.log({ data }));


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null,
    }
  }

  render(){

    return(
      <ApolloProvider client={client}>
        <div>
          Home
        </div>
      </ApolloProvider>
      )
  }
}

export default Home;
