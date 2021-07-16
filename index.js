const brain = require('./src/dummy')

module.exports = async (args) => {
  const { me, myTeam, lastRound } = args

  console.debug({
    args,
    me,
    myTeam,
    lastRound,
  })

  return brain(enemies)
}
