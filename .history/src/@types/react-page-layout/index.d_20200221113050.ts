// import {LayoutProvider} from "react-page-layout";


declare module 'react-page-layout' {

    export namespace LayoutProvider {
        namespace childContextTypes {
            function getLayout(...args: any[]): any;
        }
    }

    export namespace Page {
        namespace contextTypes {
            function getLayout(...args: any[]): any;
        }
    }

    export namespace Slot {
        namespace contextTypes {
            function getSection(...args: any[]): any;
        }
    }


    export interface SlotProps {
        name:string
    }
    export interface LayoutProviderProps {
        layouts:any,
    }
    export interface PageProps {
        layout: string,
    }
    export interface SectionProps {
        slot:string,
    }
    export namespace Page {
    namespace contextTypes {
        function getLayout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }

    export class Slot extends React.Component<SlotProps, any> {
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

    export class LayoutProvider extends React.PureComponent<LayoutProviderProps, any> {
        constructor(...args: any[]);
        getChildContext(): any;
        getLayout(name):any;
        render(): any;
    }

    export class Page extends React.PureComponent<PageProps, any> {
        constructor(...args: any[]);
        getLayout(name: any): any;
        getSections(parent: any): any;
        render(): any;
    }

    export class Section extends React.PureComponent<SectionProps, any> {
        constructor(...args: any[]);
        render(): any;
        static displayName: string;
    }


}

// export class LayoutProvider {
//     constructor(...args: any[]);

//     getChildContext(): any;

//     render(): any;

// }

// export class Page {
//     constructor(...args: any[]);

//     getLayout(name: any): any;

//     getSections(parent: any): any;

//     render(): any;

// }

// export class Section {
//     constructor(...args: any[]);

//     render(): void;

//     static displayName: string;

// }

// export class Slot {
//     constructor(...args: any[]);

//     render(): any;

//     static defaultProps: {
//         children: boolean;
//         className: any;
//         component: string;
//         style: {
//         };
//         wrapper: any;
//     };

// }

// export namespace LayoutProvider {
//     namespace childContextTypes {
//         function getLayout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

//     }

// }

// export namespace Page {
//     namespace contextTypes {
//         function getLayout(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

//     }

// }

// export namespace Slot {
//     namespace contextTypes {
//         function getSection(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;

//     }

// }


