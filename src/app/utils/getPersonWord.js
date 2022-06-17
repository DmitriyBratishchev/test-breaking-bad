export function getPersonWord(count) {
  const endingCount = count % 10
  const exceptions = [11, 12, 13, 14];
  if (exceptions.includes(count % 100)) {
    return 'персонажей'
  } else if ([2, 3, 4].includes(endingCount)) {
    return 'персонажа'
  } else if (endingCount === 1) {
    return 'персонаж'
  }
  return 'персонажей'
}