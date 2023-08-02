import { Component, Host, Prop, h } from '@stencil/core';

export type LiteralUnion<T extends string> = T | (string & {});

@Component({
  tag: 'my-test',
  shadow: true,
})
export class MyTest {
  @Prop() color: LiteralUnion<'red' | 'pink'>;

  render() {
    return <Host>I'm Test Type LiteralUnion</Host>;
  }
}