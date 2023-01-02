export async function getJsonData(apiUrl, numberOfRecords) {
  const res = await fetch(`${apiUrl}?per_page=${numberOfRecords}`);
  const json = await res.json();
  const sort = json.sort((a, b) => a.id - b.id);
  const posts = sort.slice(1);
  return posts;
}

export function getPostsByCategory(category, allPosts) {
  const postsByCategory = [];
  for (const post of allPosts) {
    if (post.categories[0] === category.id) {
      postsByCategory.push({ name: post.title.rendered, slug: post.slug });
    }
  }
  return postsByCategory;
}

export function getCategoriesByCategory(category, allCategories) {
  const categories = allCategories.filter((c) => c.parent !== 0);
  const subCategories = [];
  for (const c of categories) {
    if (c.parent === category.id) {
      subCategories.push({ name: c.name, slug: c.slug });
    }
  }
  return subCategories;
}
