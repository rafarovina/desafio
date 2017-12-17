import React, { Component } from "react";
import { Player } from "../../components";

const getInitialState = () => ({
  players: {
    1: {
      id: 1,
      name: "P1",
      life: 100
    },
    2: {
      id: 2,
      name: "P2",
      life: 100
    }
  },
  playerIds: [1, 2],
  finished: false
});

class Battle extends Component {
  state = getInitialState();

  handleAttack = playerId => {
    this.setState(state => {
      const player = { ...state.players[playerId] };
      player.life -= 20;

      let finished = false;
      if (player.life <= 0) {
        finished = true;
      }

      return {
        ...state,
        finished,
        players: {
          ...state.players,
          [playerId]: player
        }
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
      return (
        <div>
          The winner is: {player.name}{" "}
          <button onClick={this.handleReset}>reset</button>
        </div>
      );
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

    return <div>{renderedPlayers}</div>;
  }
}

export default Battle;
