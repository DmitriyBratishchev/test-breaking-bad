export function sortOnCountPerson(list, action) {
  switch (action) {
    case 'asc':
      return [...list].sort((a, b) => {
        if (a.countPerson < b.countPerson) return 1;
        if (a.countPerson > b.countPerson) return -1;
        return 0
      })
    case 'desc':
      return [...list].sort((a, b) => {
        if (a.countPerson > b.countPerson) return 1;
        if (a.countPerson < b.countPerson) return -1;
        return 0
      })

    default:
      return list;
  }
}