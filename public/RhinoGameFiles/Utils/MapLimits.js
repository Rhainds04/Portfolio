const MapLimits = {
  apply: function (gameObject, horizontalLimit, verticalLimit) {
    const playerWidth = gameObject.width;
    const playerHeight = gameObject.height;

    const rightEdge = horizontalLimit - playerWidth / 2 - 5;
    const leftEdge = playerWidth / 2 + 5;
    const bottomEdge = verticalLimit - playerHeight / 2 - 5;
    const topEdge = playerHeight / 2 + 5;

    gameObject.x = Math.max(leftEdge, Math.min(rightEdge, gameObject.x));
    gameObject.y = Math.max(topEdge, Math.min(bottomEdge, gameObject.y));
  },
};
