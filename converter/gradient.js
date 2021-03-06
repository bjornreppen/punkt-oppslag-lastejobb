function encode(node, area, value) {
  const oldv = node.v || 0;
  const oldp = node.p || 0;
  const newv = oldv * oldp + value * area;
  const newP = oldp + area;
  node.v = newv / newP;
  node.p = newP;
}

function serialize(node) {
  return {
    v: node.v,
    min: node.min,
    max: node.max,
    var: node.var
  };
}

module.exports = { encode, serialize };
