export function getImg(res) {
  const key = Object.keys(res)[0];
  return res[key].default;
}

export const lsKey = {
  version: 'version',
};
