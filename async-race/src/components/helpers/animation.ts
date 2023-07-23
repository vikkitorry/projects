export function setAnimation(id: number, distance: number, velocity: number, wayWidth: number, carImg: Element) {
  const duration: number = distance / velocity;
  carImg?.animate(
    [
      {
        transform: 'translateX(0)',
      },

      {
        transform: `translateX(${wayWidth - 90}px)`,
      },
    ],
    {
      duration,
      fill: 'forwards',
    },
  );
}