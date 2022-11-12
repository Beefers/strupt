declare module "strupt" {
    type Key = {
        [index: string]: [number, boolean, boolean];
    }

    type EncryptionOptions = {
        emojis?: boolean;
        words?: boolean;
    }

    export function encrypt(string: string, options: EncryptionOptions): { string: string, key: Key }; 
    export function decrypt(string: string, key: Key): string; 
}