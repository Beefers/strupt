declare module "strupt" {
    type Key = Map<string, [number, boolean, boolean]>

    type EncryptionOptions = {
        emojis?: boolean;
        words?: boolean;
    }

    export function encrypt(string: string, options: EncryptionOptions): { string: string, key: string }; 
    export function decrypt(string: string, key: string): string; 
}