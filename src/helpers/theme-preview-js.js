import React from "react";
import { remToPx } from "./rem-to-px";

export const PreviewTokens = ({ theme }) => {
  return (
    <div>
      <section>
        <i>generated from theme.js</i>
      </section>

      <section>
        <h3>Font sizes</h3>
        {Object.keys(theme.fontSizes).map(name => {
          const value = theme.fontSizes[name];
          return (
            <div
              key={name}
              className="row"
              style={{ borderBottom: "1px dashed #E1E7EC" }}
            >
              <span style={{ fontSize: value }}>
                Good design is good business
              </span>
              <span>
                <b>{name}</b> / {value} / {remToPx(value)}
              </span>
            </div>
          );
        })}
      </section>

      <section>
        <h3>Space</h3>
        {Object.keys(theme.space).map(name => {
          const value = theme.space[name];
          return (
            <div
              key={name}
              className="row"
              style={{ borderBottom: "1px dashed #E1E7EC" }}
            >
              <span
                className="space-box"
                style={{ width: value, height: value }}
              />
              <span>
                <b>{name}</b> / {value} / {remToPx(value)}
              </span>
            </div>
          );
        })}
      </section>

      <section>
        <h3>Colors</h3>
        {Object.keys(theme.colors).map(name => {
          const value = theme.colors[name];

          if (typeof value === "string") {
            return (
              <div key={name} className="row">
                <span className="color-swatch" style={{ background: value }} />
                <span>{name}</span>
              </div>
            );
          } else if (typeof value === "object") {
            const values = Object.keys(value);
            return (
              <div key={name}>
                {values.map(nestedName => {
                  const nestedValue = theme.colors[name][nestedName];
                  return (
                    <div key={nestedName} className="row">
                      <span
                        className="color-swatch"
                        style={{ background: nestedValue }}
                      />
                      <span>
                        {name}.{nestedName}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
    </div>
  );
};
