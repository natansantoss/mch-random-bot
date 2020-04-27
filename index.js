module.exports = async ({ me, myTeam, enemies, lastRound }) => {
  const enemy = enemies.pop()

  console.debug({
    me,
    myTeam,
    enemies,
    lastRound,
  })

  return {
    target: enemy._id,
    actions: [
      { type: 'attack', target: 'head' }, 
      { type: 'attack', target: 'head' }, 
      { type: 'attack', target: 'head' }, 
    ]
  }
}
