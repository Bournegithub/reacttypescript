declare module 'react-page-layout' {
    declare class LayoutProvider extends PureComponent{ 
        // constructor(...args: any[]);

        // getChildContext(): any;
        // render(): any;
    
    }

    declare class Page {
        constructor(...args: any[]);
    
    }
    

    declare class Section{
        constructor(...args: any[]);

        // render(): any;
    
        // static displayName: string;
    
    }
 
    declare class Slot extends Component{
        constructor(...args: any[]);

        render(): any;
    
        // static defaultProps: {
        //     children: boolean;
        //     className: any;
        //     component: string;
        //     style: {};
        //     wrapper: any;
        // };
    
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

