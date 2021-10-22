module.exports = ( enemies ) => {
  const enemy = enemies.pop()
  
  return {
    target: enemy.id,
    actions: [
      { type: 'attack', target: 'head' }, 
      { type: 'attack', target: 'head' }, 
      { type: 'attack', target: 'head' }, 
    ]
  }
}
