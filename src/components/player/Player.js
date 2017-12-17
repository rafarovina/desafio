import React from 'react';
import { Panel, ProgressBar, Button } from 'react-bootstrap';

import { getLifebarBsStyle } from '../../utils/lifeBarUtils';

const Player = ({ name, life, onAttack, style, ...rest }) => {
  const lifeBarBsStyle = getLifebarBsStyle(life);

  return (
    <Panel
      header={name}
      style={{ minWidth: 300, margin: 32, ...style }}
      {...rest}
    >
      <ProgressBar bsStyle={lifeBarBsStyle} now={life} />
      <Button
        bsSize="large"
        bsStyle="primary"
        style={{ width: '100%' }}
        onClick={onAttack}
      >
        Attack {name}
      </Button>
    </Panel>
  );
};

export default Player;
