export function getRandomColor() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 70) + 30;
  return `hsl(${h}, ${s}%, 60%)`;
}
