export const resetBattle = () => ({
  type: 'RESET',
});

export const attackPlayer = playerId => ({
  type: 'ATTACK',
  meta: {
    id: playerId,
  },
  payload: {
    damage: 20,
  },
});
