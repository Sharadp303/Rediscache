import { CacheKey, CacheTTL, Controller,Get} from "@nestjs/common";
import {  RedisCacheService } from "./cache.service";



@Controller('cache')
export class RedisCacheController{
constructor(private readonly cacheservice:RedisCacheService){}
@Get('get')
@CacheKey("new-Cache")
@CacheTTL(60000)
async funcget(){
 return this.cacheservice.func();
}

}