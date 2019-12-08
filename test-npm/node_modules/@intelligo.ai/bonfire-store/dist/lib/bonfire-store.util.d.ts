export declare function FromLocalStore<J = any, T = any>(keyName?: keyof T | any): (target: any, key: keyof T) => any;
export declare function FromStore<T = any, J = any>(name?: keyof T | any): (target: any, key: keyof T) => any;
