export const createRandomValue = (min: number, max: number) => {
  const rnd = Math.random();
  const range = max - min;
  const value = rnd * range;
  return min + value;
};
