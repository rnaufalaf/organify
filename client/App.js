import React from "react";

import Navigators from "./src/Navigators";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./src/Client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigators />
    </ApolloProvider>
  );
}
