// import { Module,CacheModule, CacheInterceptor} from "@nestjs/common";
// import { APP_INTERCEPTOR } from "@nestjs/core";
// import { cacheController } from "./cache.controller";
// import { cacheService } from "./cache.service";
// import * as redisStore from 'cache-manager-redis-store'


// @Module({
//     imports:[CacheModule.register({
//         store:redisStore,
//         socket: {host:'localhost',
//         port:6379}
//     })],
//  controllers:[cacheController],
// providers:[cacheService,{
//     provide:APP_INTERCEPTOR,
//     useClass:CacheInterceptor
//  }],
//  exports:[]
// })
// export class cacheModule{}
import { Module, CacheModule, CacheInterceptor } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { CacheController } from "./cache.controller";
import { CacheService } from "./cache.service";
import redisStore from 'cache-manager-redis-store';
@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      config: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [CacheController],
  providers: [
    CacheService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [CacheModule],
})
export class cacheModule {}