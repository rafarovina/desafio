import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const Winner = ({ player, onReset, ...rest }) => (
  <Modal show={true} onHide={onReset} {...rest}>
    <Modal.Header>
      <Modal.Title>We have a winner!</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      {player.name} won with {player.life}% of his life
    </Modal.Body>

    <Modal.Footer>
      <Button bsStyle="primary" onClick={onReset}>
        Battle again!
      </Button>
    </Modal.Footer>
  </Modal>
);

Winner.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    life: PropTypes.number,
  }),
  onReset: PropTypes.func,
};

Winner.defaultProps = {
  player: {
    name: '-',
    life: 0,
  },
  onReset: () => {},
};

export default Winner;
