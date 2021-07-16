const brain = require('./src/dummy')

module.exports = async (args) => {
  const { me, myTeam, enemies, lastRound  = args

  console.debug({
    args,
    me,
    myTeam,
    lastRound,
  })

  return brain(enemies)
}
