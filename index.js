const brain = require('./src/dummy')

module.exports = async () => {
  const { me, myTeam, enemies, lastRound } = args

  console.debug({
    args,
    me,
    myTeam,
    enemies,
    lastRound,
  })

  return brain(enemies)
}
