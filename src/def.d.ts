declare module "strupt" {
    type Key = Map<string, [number, boolean, boolean]>

    type EncryptionOptions = {
        emojis?: boolean;
        words?: boolean;
    }
}