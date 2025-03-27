import { Cachable } from '@/types/cache';
import { defaultSettings, SettingsType } from '@/types/settings';
// import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

class DataService {
    
    public async getSettings(): Promise<SettingsType> {
        return AsyncStorage.getItem('settings').then(data => data ? JSON.parse(data) : defaultSettings);
    }

    public async updateSettings(newSettings: Partial<SettingsType>): Promise<void> {
        const settings = await this.getSettings();
        const updatedSettings = { ...settings, ...newSettings };
        AsyncStorage.setItem('settings', JSON.stringify(updatedSettings));
    }

    public resetSettings(): void {
        AsyncStorage.removeItem('settings');
        AsyncStorage.setItem('settings', JSON.stringify(defaultSettings));
    }

    public saveCache<T>(data: Cachable<T>): void {
        AsyncStorage.setItem("__cache_"+data.id, JSON.stringify(data));
    }
    
    public async getCache<T>(id: string): Promise<Cachable<T> | null> {
        const data = await AsyncStorage.getItem("__cache_"+id);
        return data ? JSON.parse(data) : null;
    }

    public clearCache(): void {
        AsyncStorage.getAllKeys().then(keys => {
            keys.forEach(key => {
                if(key.startsWith("__cache_")) {
                    AsyncStorage.removeItem(key);
                }
            });
        });
    }
}

const globalDataService = global as unknown as { dataService: DataService };

export const dataService = globalDataService.dataService || new DataService();