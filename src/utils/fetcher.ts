export async function fetcher(url: string) {
  const rsp = await fetch(url);
  if (rsp.ok) {
    const data = await rsp.json();
    return data;
  } else {
    throw new Error(rsp.statusText);
  }
}
