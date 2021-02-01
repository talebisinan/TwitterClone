import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Users from "./Users";
import "./App.css";
import Landing from "./Landing";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/landing" component={Landing} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
