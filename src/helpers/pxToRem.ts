//helpers to convert px to rem
export default function pxToRem(px: number) {
  const rem = `${px / 16}rem`;
  return rem;
}
