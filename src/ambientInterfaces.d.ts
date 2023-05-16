
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
export { };