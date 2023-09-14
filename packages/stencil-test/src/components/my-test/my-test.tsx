import { Component, Host, Prop, Watch, h } from '@stencil/core';
import type { LiteralUnion } from '@/types';

@Component({
  tag: 'my-test',
})
export class MyTest {
  @Prop() color: LiteralUnion<'red' | 'pink'>;

  @Prop() title: string;

  @Prop() value: number[];

  @Watch('value')
  watchPropValue(value: number[]) {
    console.log(value);
  }

  render() {
    return (
      <Host>
        I'm Test Type LiteralUnion
        <slot />
      </Host>
    );
  }
}
