function appendZero(input: number) {
  const digit = `${input}`.length;
  return digit > 1 ? `${input}` : `0${input}`;
}

export default function getDob(iso: string) {
  const obj = new Date(iso);
  const year = obj.getFullYear();
  const month = obj.getMonth();
  const date = obj.getDate();

  return `${appendZero(date)}-${appendZero(month + 1)}-${year}`;
}
