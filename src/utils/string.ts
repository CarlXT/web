/**
 * Get the <path> value of the svg file
 */
export function getSvgData(svg: string) {
  const s = svg.split('d="');
  const path = s.length > 1 ? s[1].split('"')[0] : "";
  const width = s.length > 1 ? s[0].split('width="')[1].split('"')[0] : "";
  const height = s.length > 1 ? s[0].split('height="')[1].split('"')[0] : "";

  return { path, width, height };
}

/**
 * Convert value to currency
 */
export function toCurrency(value: string | number) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'PHP' });
}

/**
 * Capitalize the first letter of each word
 */
export function capitalize(text: string) {
  return text.replace(/_/g, " ").replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

/**
 * Get the number of times a character appears in a string 
 */
export function charCount(needle: string, haystack: string) {
  return haystack.split(needle).length - 1;
}