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
}

const globalDataService = global as unknown as { dataService: DataService };

export const dataService = globalDataService.dataService || new DataService();