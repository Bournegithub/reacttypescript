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
        children: any,
        layouts: any,
    }
    declare class LayoutProvider extends React.PureComponent<layoutProviderProps>{

    }

    interface pageProps {
        children: any,
        layout: string,
    }
    declare class Page extends React.PureComponent<pageProps>{

    }
    
    interface sectionProps {
        children: any;
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


