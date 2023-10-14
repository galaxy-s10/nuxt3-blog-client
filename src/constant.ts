export const GITHUB_REPO = 'https://github.com/galaxy-s10/nuxt3-blog-client';

export function getImg(res) {
  const key = Object.keys(res)[0];
  return res[key].default;
}

export const lsKey = {
  version: 'version',
  lastBuildDate: 'lastBuildDate',
};
