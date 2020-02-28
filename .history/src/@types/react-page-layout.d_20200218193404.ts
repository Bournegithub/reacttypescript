import * as React from 'react';
declare module 'react-page-layout' {
    export namespace Slot {
        namespace contextTypes {
            function getLayout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    export class Slot {
            constructor(...args: any[]);

            render(): any;

            static defaultProps: {
                children: boolean;
                className: any;
                component: string;
                style: {
                };
                wrapper: any;
            };

    }
    
}
// export class LayoutProvider {
//     constructor(...args: any[]);
//
//     getChildContext(): any;
//
//     render(): any;
//
// }
//
// export class Page {
//     constructor(...args: any[]);
//
//     getLayout(name: any): any;
//
//     getSections(parent: any): any;
//
//     render(): any;
//
// }
//
// export class Section {
//     constructor(...args: any[]);
//
//     render(): void;
//
//     static displayName: string;
//
// }
//
// export class Slot {
//     constructor(...args: any[]);
//
//     render(): any;
//
//     static defaultProps: {
//         children: boolean;
//         className: any;
//         component: string;
//         style: {
//         };
//         wrapper: any;
//     };
//
// }
//
// export namespace LayoutProvider {
//     namespace childContextTypes {
//         function getLayout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
//
//     }
//
// }
//
// export namespace Page {
//     namespace contextTypes {
//         function getLayout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
//
//     }
//
// }
//


