
export async function getPhoneFeed () {
  return fetch('/phonefeed.json').then((response) => response.json())
}
