import React, { Component } from 'react';
import { Player, Winner } from '../../components';

const getInitialState = () => ({
  players: {
    1: {
      id: 1,
      name: 'P1',
      life: 100,
    },
    2: {
      id: 2,
      name: 'P2',
      life: 100,
    },
  },
  playerIds: [1, 2],
  finished: false,
});

class Battle extends Component {
  state = getInitialState();

  handleAttack = playerId => {
    this.setState(state => {
      const player = { ...state.players[playerId] };
      player.life -= 20;

      const players = {
        ...state.players,
        [playerId]: player,
      };

      // Filter the still alive players, notice it uses the updated players object
      const playersAlive = state.playerIds.filter(id => players[id].life > 0);

      return {
        ...state,
        finished: playersAlive.length <= 1,
        players,
      };
    });
  };

  handleReset = () => {
    this.setState(getInitialState());
  };

  render() {
    const { players, playerIds, finished } = this.state;

    if (finished) {
      const winnerId = playerIds.find(id => players[id].life > 0);
      const player = players[winnerId];
      return <Winner player={player} onReset={this.handleReset} />;
    }

    const renderedPlayers = playerIds.map(playerId => {
      const player = players[playerId];
      return (
        <Player
          key={player.id}
          onAttack={() => this.handleAttack(playerId)}
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
      </div>
    );
  }
}

export default Battle;
