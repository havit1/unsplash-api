export const uniqByProp_map = prop => arr =>
  Array.from(
    arr
      .reduce(
        (acc, item) => (item && item[prop] && acc.set(item[prop], item), acc),
        new Map()
      )
      .values()
  );
