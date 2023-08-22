import { Component, Host, Prop, h } from '@stencil/core';
import type { LiteralUnion } from '@/types';

@Component({
  tag: 'my-test',
})
export class MyTest {
  @Prop() color: LiteralUnion<'red' | 'pink'>;

  @Prop() title: string;

  render() {
    return (
      <Host>
        I'm Test Type LiteralUnion
        <slot />
      </Host>
    );
  }
}
