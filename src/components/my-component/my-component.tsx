import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" x="0" y="0" height="300" width="300">
        <circle r="142" cx="150" cy="150" fill="none" stroke="#000000" stroke-width="2" />

        <foreignObject x={0} y={0} width="200" height="200">
          <p>Hello World</p>
        </foreignObject>
      </svg>
    );
  }
}
