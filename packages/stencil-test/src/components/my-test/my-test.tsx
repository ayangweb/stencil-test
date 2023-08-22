import { Component, Host, Prop, h } from '@stencil/core';

export type LiteralUnion<T extends string> = T | (string & {});

@Component({
  tag: 'my-test',
})
export class MyTest {
  @Prop() color: LiteralUnion<'red' | 'pink'>;

  render() {
    return (
      <Host>
        I'm Test Type LiteralUnion
        <slot />
      </Host>
    );
  }
}
