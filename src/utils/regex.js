export const pathToRegex = (path) =>
  new RegExp(
    `^${path
      .replace(/\//g, '\\/')
      .replace(/:\w+/g, '(?<$&>[A-Za-z0-9-_.~%]{1,})')
      .replace(/:/g, '')}$`
  );
