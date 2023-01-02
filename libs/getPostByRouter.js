export function getPostByRouter(path, data) {
  return data.filter((p) => p.slug === path && p.type === "post");
}
