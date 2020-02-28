
declare module 'react-page-layout' {

    declare class LayoutProvider extends React.Component { 
        constructor(props: any, context?: any)
        static propTypes: {
            layouts: any,
            children: any
        };
        static childContextTypes: {
            getLayout:  any
        };
        
        getChildContext <childContextTypes> (): getLayout;
        render(): any;
    
    }
    declare class Page extends React.Component {
        constructor(props: any, context?: Page)
        static propTypes: {
            layout: any,
            children: any,
        };
    
        static contextTypes: {
            getLayout: any,
        };

        getLayout(name: any): any;
        getSections(parent: any): any;
    
        render(): any;
    
    }
    
    declare class Section extends React.Component {
        constructor(props: any, context?: any)
        static propTypes :{
            slot: string,
            children: any,
        };
        render(): any;
    
        static displayName: string;
    
    }
    declare class Slot extends React.PureComponent {
        constructor(props: any, context?: any)
        static propTypes: {
            name: string,
            component: any,
            wrapper: any,
            className: string,
            style: object,
            children: any
        }
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
    export {Slot, LayoutProvider, Section, Page}
    // class LayoutContext extends PureComponent {

    //     static propTypes: {
    //       sections: any,
    //       children: any,
    //     };
      
    //     static childContextTypes: {
    //       getSection: any,
    //     };
      
    //     getChildContext <childContextTypes>():any
      
    //     getSection(slot): any;
    //     render(): any
      
    // }
    // export namespace LayoutProvider {
    //     namespace childContextTypes {
    //         function getLayout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    
    //     }
    
    // }
    
    // export namespace Page {
    //     namespace contextTypes {
    //         function getLayout(...args: any[]): any;
    
    //     }
    
    // }
    
    // export namespace Slot {
    //     namespace contextTypes {
    //         function getSection(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    
    //     }
    
    // }
    
    
    // export namespace LayoutProvider {
    //     namespace childContextTypes {
    //         function getLayout(...args: any[]): any;
    //     }
    // }

    // export namespace Page {
    //     namespace contextTypes {
    //         function getLayout(...args: any[]): any;
    //     }
    // }

    // export namespace Slot {
    //     namespace contextTypes {
    //         function getSection(...args: any[]): any;
    //     }
    // }

    // export class Slot extends React.PureComponent<> {
    //     // constructor(props: any[], context: any);
    //     constructor(...args: any[]);
    //     static contextTypes: {
    //         getSection: Slot.contextTypes.getSection
    //     }
    //     static propTypes: {
    //         name: string,
    //         component: any,
    //         wrapper: any,
    //         className: string,
    //         style: object,
    //         children: any
    //     }
    //     static defaultProps: {
    //         component: string,
    //         wrapper: any,
    //         className: any,
    //         style: object,
    //         children: boolean,
    //     }
    //     render(): any;

    // }
    
    // export class LayoutProvider extends React.Component<>{
    //     constructor(...args: any[]);
    //     // constructor(props: any[], context: any);
    //     static propTypes: {
    //         layouts: any,
    //         children: any
    //     };

    //     static childContextTypes: {
    //         getLayout: LayoutProvider.childContextTypes.getLayout,
    //     };
    //     getChildContext(): any;
    //     getLayout(name: string): any;
    //     render(): any;
    // }

    // export class Page extends React.Component<{layout: string,children?: any}>{
    //     constructor(...args: any[]);
    //     // constructor(props: any[], context: any);
    //     static propTypes: {
    //         layout: any,
    //         children: any,
    //     };

    //     static contextTypes: {
    //         getLayout: Page.contextTypes.getLayout,
    //     };

    //     getSections(parent: any): any;
    //     getLayout(name: string): any;
    //     render(): any;
    // }

    // export class Section extends React.Component<>{
    //     constructor(...args: any[]);
    //     // constructor(props: any[], context: any);
    //     static displayName: string;

    //     static propTypes :{
    //         slot: string,
    //         children: any,
    //     };
    //     render(): any;
    // }

    // class LayoutContext extends React.PureComponent<> {
    //     constructor(props: any[], context: any);
    //     static propTypes: {
    //         sections: any,
    //         children: any,
    //     };

    //     static childContextTypes: {
    //         getSection: any,
    //     };
    //     getChildContext(): any;
    //     getSection(slot: string): any;
    //     render(): any;
    // }
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

