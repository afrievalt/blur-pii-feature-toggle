import React from "react";
import { Prism } from "react-syntax-highlighter";
import { tomorrow as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({ language = "javascript", value }) => {
  return (
    <Prism language={language} style={theme}>
      {value}
    </Prism>
  );
};
