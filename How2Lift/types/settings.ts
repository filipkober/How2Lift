export type SettingsType = {
    vibrations: boolean;
    useLbs: boolean;
    superSecretSettings: boolean;
}

export const defaultSettings: SettingsType = {
    vibrations: true,
    useLbs: false,
    superSecretSettings: false
}