import { Cachable } from "@/types/cache";
import { dataService } from "./dataService";

const DEFAULT_EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 7; // week


class CacheService {
    public set<T>(key: string, value: T, expirationTime: number = DEFAULT_EXPIRATION_TIME): void {
        const cachableObject: Cachable<T> = {
            id: key,
            data: value,
            expires: Date.now() + expirationTime
        };
        dataService.saveCache(cachableObject);
    }

    public async get<T>(key: string): Promise<T | undefined> {
        const cached = await dataService.getCache<T>(key);
        if (cached && cached.expires && cached.expires > Date.now()) {
            return cached.data;
        } else {
            return undefined;
        }
    }
}

const globalCacheService = global as unknown as { cacheService: CacheService };

export const cacheService = globalCacheService.cacheService || new CacheService();