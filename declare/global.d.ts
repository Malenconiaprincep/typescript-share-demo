interface Window {
  themeColor_: string;
  config_: any;
  Worker: any;
  reviewer: any;
  reporter: any;
  linkId: any;
  delaySendTime: any;
  init: any;
  enabled: any;
  wpsQuery: any;
  wpsEventHandler: any;
  splash: any;
  cefQuery: any;
  clientAPI: any;
  homepageapiasync: any;
  $: any;
  notifyIsLogined: any;
  wps: any;
  iOSJumpPath: any;
}

declare let Jquery: (selector: string) => any

declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string;
}

declare class Animal2 {
  name: string;
  constructor(name: string);
  sayHi() {
    return `My name is ${this.name}`;
  };
  // ERROR: An implementation cannot be declared in ambient contexts.
}