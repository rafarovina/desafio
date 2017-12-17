import React, { Component } from 'react';

class Player extends Component {
  render() {
    const { name, life, onAttack } = this.props;
    return (
      <div style={{ border: '1px solid black', margin: 16 }} >
        <div>{name}</div>
        <div>{life}%</div>
        <div>
          <button onClick={onAttack}>attack</button>
        </div>
      </div>
    );
  }
}

export default Player;
