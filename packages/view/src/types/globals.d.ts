declare module "*.svg" {
  const content: any;
  export default content;
}

declare global {
  const tree: any;
  interface Window {
    passUI: {
      [key: string]: any;
    };
    tree: any;
  }
}

export {};
