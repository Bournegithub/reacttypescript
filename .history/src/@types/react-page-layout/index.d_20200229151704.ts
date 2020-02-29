// declare module 'react-page-layout' {
//     declare class LayoutProvider extends React.PureComponent<any>{

//     }

//     declare class Page extends React.PureComponent <any> {

//     }
    

//     declare class Section extends React.PureComponent <any> {
    
//     }
 
//     declare class Slot extends React.Component<any>{
    
//     }

//     export {Slot, LayoutProvider, Section, Page}

// }

declare module 'react-page-layout' {
    interface layoutProviderProps {
        children: Element,
        layouts: any,
    }
    declare class LayoutProvider extends React.PureComponent<layoutProviderProps>{

    }

    interface pageProps {
        children: Element,
        layout: any,
    }
    declare class Page extends React.PureComponent<pageProps>{

    }
    
    interface sectionProps {
        children: Element;
        slot: string;
    }
    declare class Section extends React.PureComponent<sectionProps>{
    
    }
    
    interface slotProps {
        name: string
    }
    declare class Slot extends React.Component<slotProps>{
    
    }

    export {Slot, LayoutProvider, Section, Page}

}


