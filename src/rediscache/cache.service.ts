import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import {Cache} from "cache-manager"
@Injectable()
export class RedisCacheService{
    constructor(@Inject(CACHE_MANAGER) private cacheManager:Cache){}
  
    async func(){
        await this.cacheManager.set("key","566")
        // await this.cacheManager.del('key')

        const value= await this.cacheManager.get('key');
        console.log(value)
       
        return "hello"
    }
    

}