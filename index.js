module.exports = async (...args) => {
  console.log({ args })

  const { me, myTeam, enemies, lastRound } = args
  const enemy = enemies.pop()

  console.debug({
    me,
    myTeam,
    enemies,
    lastRound,
  })

  console.debug({
    process,
    console,
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
