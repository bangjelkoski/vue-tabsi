export const uniqueId = (characters = 6) =>
  (
    Number(String(Math.random()).slice(2)) +
    Date.now() +
    Math.round(performance.now())
  ).toString(characters);
