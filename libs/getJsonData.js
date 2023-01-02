export async function getJsonData(target, numberOfRecords) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_WP_VERSION}/${target}?per_page=${numberOfRecords}`
    );
    const json = await res.json();
    const sort = json.sort((a, b) => a.id - b.id);
    const response = sort.slice(1);
    return response;
  } catch (error) {
    console.log(error);
  }
}
