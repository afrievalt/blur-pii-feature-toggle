import React from "react";
import { Introduction } from "./Markdown/Introduction";

export const Home = () => {
  const search = window?.location.search;
  const isBlurPii = !!~search.indexOf("blurPii");

  return (
    <main>
      <Introduction />
      <div>
        SS#:
        <span data-blur-pii={isBlurPii}>221-22-1560</span>
      </div>
      <a data-hide={isBlurPii} href="https://x64r7.csb.app/?blurPii">
        Blur PII
      </a>
      <a data-hide={!isBlurPii} href="https://x64r7.csb.app/">
        Show PII
      </a>
    </main>
  );
};
