export function getSiteMap(data) {
  const siteMap = [];

  //get main menu
  for (const obj of data) {
    if (obj.parent === 0) {
      siteMap.push({ id: obj.id, name: obj.name, slug: obj.slug });
    }
  }
  //get submenu lists: posts or categories
  for (const m of siteMap) {
    const index = siteMap.indexOf(m);
    for (const obj of data) {
      //check and add submenu level 1
      if (
        obj.type === "post" ? m.id === obj.categories[0] : m.id === obj.parent
      ) {
        siteMap[index].items = getSubItemsByItem(m, data);
        // check and add submenu level 2
        for (const item of siteMap[index]["items"]) {
          item.items = getSubItemsByItem(item, data);
        }
      }
    }
  }

  return siteMap;
}

function getSubItemsByItem(item, data) {
  const result = [];
  for (const obj of data) {
    if (
      obj.type === "post"
        ? obj.categories[0] === item.id
        : obj.parent === item.id
    ) {
      result.push({
        id: obj.id,
        name: obj.name || obj.title.rendered,
        slug: obj.slug,
      });
    }
  }
  return result;
}
