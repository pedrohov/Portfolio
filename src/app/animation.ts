import { trigger, style, transition, animate, query, stagger, group, animateChild } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnim', [
    /*
    transition('* => Home', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ]),*/
    transition('Portfolio => Home', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ]),
    transition('About => Home', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ]),
    transition('* => About', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ], {optional: true})
      ]),
      query(':enter', animateChild(), {optional: true}),
    ]),
  ]);