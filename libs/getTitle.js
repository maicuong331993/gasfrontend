export default function getTitle(slug, data) {
  for (const obj of data) {
    if (obj.slug === slug) {
      return obj.type === "post" ? obj.title.rendered : obj.name;
    }
  }
}
