// export function findCarImg(parent: Element, id: number) {
//   const carImg = parent.querySelector(`[data-car="${id}"]`)
//   return carImg
// }

// export function setAnimation(distance: number, velocity: number, wayWidth: number, parent: Element, id: number) {
//   const carImg = findCarImg(parent, id)
//   const duration: number = distance / velocity;
//   carImg?.animate(
//     [
//       {
//         transform: 'translateX(0)',
//       },

//       {
//         transform: `translateX(${wayWidth - 90}px)`,
//       },
//     ],
//     {
//       duration,
//       fill: 'forwards',
//     },
//   );
// }

// export function removeAnimation(parent: Element, id: number) {
//   const carImg = findCarImg(parent, id)
//   carImg?.animate(
//     [
//       {
//         transform: 'translateX(0)',
//       },

//       {
//         transform: `translateX(0px)`,
//       },
//     ],
//     {
//       fill: 'forwards',
//     },
//   );
// }

// export function stopAnimation(parent: Element, id: number) {
//   const carImg = findCarImg(parent, id)
//   console.log(carImg?.animate())
// }

export class CarAnimation {

  public parent: HTMLElement
  public carImg: HTMLElement
  public animation: Animation

  constructor(parent: HTMLElement, id: number) {
    this.parent = parent
    this.carImg = this.getCarImage(parent, id)
    this.animation = this.carImg.animate(
      [
        {
          transform: 'translateX(0)',
        },

        {
          transform: `translateX(0px)`,
        },
      ],
      {
        fill: 'forwards',
      },
    );
  }

  getCarImage(parent: Element, id: number) {
    const carImg = parent.querySelector(`[data-car="${id}"]`) as HTMLElement
    return carImg
  }

  stopAnimation() {
    this.animation.pause()
  }

  setAnimation(distance: number, velocity: number, wayWidth: number) {
    const duration: number = distance / velocity;
    this.animation = this.carImg.animate(
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

  removeAnimation() {
    this.carImg.animate(
      [
        {
          transform: 'translateX(0)',
        },

        {
          transform: `translateX(0px)`,
        },
      ],
      {
        fill: 'forwards',
      },
    );
  }

}