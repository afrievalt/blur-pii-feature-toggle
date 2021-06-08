import introduction from "./introduction.md"
import React from "react";
import Markdown from "react-markdown/with-html";
import { decode } from "js-base64";
import { CodeBlock } from "../helpers/markdown-codeblock";


export const Introduction = () => {
  return (
    <Markdown escapeHtml={false} renderers={{ code: CodeBlock }}>
      {decode(introduction).slice(14)}
    </Markdown>
  );
};