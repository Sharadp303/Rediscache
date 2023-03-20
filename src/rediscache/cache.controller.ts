import { CacheKey, CacheTTL, Controller,Get} from "@nestjs/common";
import { cacheService } from "./cache.service";



@Controller('cache')
export class CacheController{
constructor(private readonly cacheservice:cacheService){}
@Get('get')
@CacheKey("new-Cache")
@CacheTTL(60000)
async funcget(){
 return this.cacheservice.func();
}

}