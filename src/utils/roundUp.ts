export function roundUp(number: number, near: number) {
  if (number % near === 0) {
    return number;
  }

  return Math.floor(number / near) * near + near;
}
