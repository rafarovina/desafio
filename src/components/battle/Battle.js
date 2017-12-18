import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { resetBattle, attackPlayer } from '../../actions/battleActions';
import { Player, Winner } from '../../components';

const Battle = props => {
  const {
    players,
    playerIds,
    finished,
    onAttackPlayerAction,
    onResetBattleAction,
  } = props;

  
  if (finished) {
    const winnerId = playerIds.find(id => players[id].life > 0);
    const player = players[winnerId];
    return <Winner player={player} onReset={onResetBattleAction} />;
  }

  const renderedPlayers = playerIds.map(playerId => {
    const player = players[playerId];
    return (
      <Player
        key={player.id}
        onAttack={() => onAttackPlayerAction(playerId)}
        {...player}
      />
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {renderedPlayers}
      <div style={{ flexBasis: '100%', textAlign: 'center' }}>
        <Button bsStyle="info" onClick={onResetBattleAction}>Reset battle</Button>
      </div>
    </div>
  );
};

Battle.propTypes = {
  players: PropTypes.object.isRequired,
  playerIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  onResetBattleAction: PropTypes.func.isRequired,
  onAttackPlayerAction: PropTypes.func.isRequired,
};

Battle.defaultProps = {};

export default connect(state => state, {
  onResetBattleAction: resetBattle,
  onAttackPlayerAction: attackPlayer,
})(Battle);
