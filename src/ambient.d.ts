declare module "*.png" {
    const path: string;
    export default path;
}
declare module "*.svg" {
    const path: string;
    export default path;
}

declare module "*.json" {
    const path: string;
    export default path;
}

export { };

declare global {
    interface Window {
        particlesJS: any;
    }
    interface Function {
        resource: string;
    }
    interface BaseModel {
        myFunction: () => void;
    }
}