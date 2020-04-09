var ship = "hit";

function battleShip() {
  return(`${ ship === 'hit' ? '1 point' : 'You lost a point' }`)
}

console.log(battleShip())
