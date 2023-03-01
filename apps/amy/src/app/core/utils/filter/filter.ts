export function filter<T>(
  arr: T[],
  cb: (value: T, index: number, arr2: T[]) => boolean
): T[] {
  return arr.filter(cb);
}
