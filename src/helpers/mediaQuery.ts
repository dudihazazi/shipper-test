//helpers to add media query
export default function mediaQuery(breakpoint: number) {
  const query = `@media(min-width: ${breakpoint}px)`;
  return query;
}
