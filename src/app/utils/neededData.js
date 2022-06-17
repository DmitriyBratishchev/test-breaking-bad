export default function neededData(list) {
  return list.map(item => {
    const { episode_id: _id, episode, season, characters } = item
    const countPerson = characters.length
    return {
      _id,
      episode,
      season,
      countPerson
    }
  })
}