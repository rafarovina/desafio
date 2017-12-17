export const LIFEBAR_THRESHOLDS = {
  GREEN: 80,
  BLUE: 60,
  ORANGE: 40,
  RED: 20,
};

export const getLifebarBsStyle = life => {
  if (life >= LIFEBAR_THRESHOLDS.GREEN) return 'success';
  if (life >= LIFEBAR_THRESHOLDS.BLUE) return 'info';
  if (life >= LIFEBAR_THRESHOLDS.ORANGE) return 'warning';
  return 'danger';
};
