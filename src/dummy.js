module.exports = ( enemies ) => {
  const enemy = enemies.pop()
  
  return {
    targer: enemy._id,
    actions: [
      { type: 'attack', target: 'head' }, 
      { type: 'attack', target: 'head' }, 
      { type: 'attack', target: 'head' }, 
    ]
  }
}
