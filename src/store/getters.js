export const findById = ({ nodes }) => id => nodes.find(n => n.id === id);

export const scan = ({ nodes }, { findById }) => {
  let ret = [];

  let current = nodes[0];
  while (current) {
    ret.push(current);
    current = findById(current.after);
  }
  return ret;
};

export const rotate = ({ radius }) => rad => ({
  x: radius * Math.sin(rad * 2 * Math.PI),
  y: radius * Math.cos(rad * 2 * Math.PI)
});

export const getPositionById = ({ x, y }, { scan, rotate }) => id => {
  let idx = scan.findIndex(n => n.id === id);
  if (idx === -1) return null;
  let rot = rotate(idx / scan.length);
  return {
    x: rot.x + x,
    y: rot.y + y
  };
};
