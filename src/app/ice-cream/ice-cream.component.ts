import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.scss'],
})
export class IceCreamComponent implements OnInit {
  @Emoji()
  iceCream: string = 'vanilla';

  topping: string[] = [];

  @Comfirmable('Are you sure?')
  addTopping(newTopping: string) {
    this.topping.push(newTopping);
  }

  constructor() {
    this.iceCream = 'chocolate';
  }

  ngOnInit(): void {}
}

export function Emoji() {
  return function (target: Object, key: string | symbol) {
    let val = target[key];

    const getter = () => {
      console.log('Get something');
      return val;
    };

    const setter = (newValue) => {
      console.log('Write something');
      val = '🍦' + newValue + '🍦';
    };

    return Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

export function Comfirmable(msg: string) {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log(key);

    console.log(this);
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(this);
      const allow = confirm(msg);

      if (allow) {
        return original.apply(this, args);
      }
      return null;
    };

    return descriptor;
  };
}
