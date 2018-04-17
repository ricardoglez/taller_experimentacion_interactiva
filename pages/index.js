import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import Home from '../components/Home';
//
// const link = new HttpLink({ uri: 'localhost:4000/graphql' })
//
//
// const client = new ApolloClient({
//   link,
// });
//
//
// client
//   .query({
//     query: gql`
//       {
//         hello
//       }
//     `
//   })
//   .then(data => console.log({ data }));
//

class Index extends React.Component{

  render(){
    return(
        <Home/>
      )
  }
}

export default Index;
