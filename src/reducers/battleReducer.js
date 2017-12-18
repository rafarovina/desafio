const getInitialState = () => ({
  players: {
    'p1': {
      id: 'p1',
      name: 'Player 1',
      life: 100,
    },
    'p2': {
      id: 'p2',
      name: 'Player 2',
      life: 100,
    },
  },
  playerIds: ['p1', 'p2'],
  finished: false,
});

const handleAttack = (state, action) => {
  const { meta, payload } = action;

  const playerId = meta.id;
  const damage = payload.damage;
  const player = { ...state.players[playerId] };

  player.life -= damage;

  const players = {
    ...state.players,
    [playerId]: player,
  };

  // Filter the still alive players, notice it uses the updated players object inside the find
  const playersAlive = state.playerIds.filter(id => players[id].life > 0);

  return {
    ...state,
    finished: playersAlive.length <= 1,
    players,
  };
};

const battleReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case 'ATTACK':
      return handleAttack(state, action);
    case 'RESET':
      return getInitialState();
    default:
      return state;
  }
};

export default battleReducer;
