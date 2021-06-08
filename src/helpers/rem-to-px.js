// assuming html font-size of 16px
const base = 16;
export const remToPx = (value) => {
  // unitless is assumed to be px
  if (typeof value !== "string") return value + "px";

  // rem
  if (value.endsWith("rem")) return base * parseFloat(value, 10) + "px";

  // any other value
  return value;
};
