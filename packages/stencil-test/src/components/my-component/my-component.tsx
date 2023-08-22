import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import type { LiteralUnion } from '@/types';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Prop() color: LiteralUnion<'red' | 'pink'>;

  /**
   * change event
   */
  @Event() myChange: EventEmitter;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}
        <button onClick={this.myChange.emit}>Click Me</button>
      </div>
    );
  }
}
