///<reference path="../../node_modules/@types/prop-types/index.d.ts"/>
declare module 'react-page-layout' {
    interface layoutProviderProps {
        layouts: any,
        children: any,
    }
    declare class LayoutProvider extends React.Component<layoutProviderProps> { 
        constructor(...args: any[]);

        getChildContext(): any;
        render(): any;
    
    }
    interface pageProps {
        children: any,
        layout: any
    }
    declare class Page extends React.Component<pageProps> {
        constructor(...args: any[]);

        getLayout(name: any): any;
        getSections(parent: any): any;
    
        render(): any;
    
    }
    
    declare class Section extends React.Component {
        constructor(...args: any[]);

        render(): any;
    
        static displayName: string;
    
    }
    interface slotProps {
        name: string
    }
    declare class Slot extends React.PureComponent<slotProps> {
        constructor(...args: any[]);

        render(): any;
    
        static defaultProps: {
            children: boolean;
            className: any;
            component: string;
            style: {};
            wrapper: any;
        };
    
    }

    export {Slot, LayoutProvider, Section, Page}

}


// /** Declaration file generated by dts-gen */
//
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
// export namespace Slot {
//     namespace contextTypes {
//         function getSection(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
//
//     }
//
// }

