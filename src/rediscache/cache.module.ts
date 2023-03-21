import { Module,CacheModule, CacheInterceptor} from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import {  RedisCacheController } from "./cache.controller";
import {  RedisCacheService } from "./cache.service";
import * as redisStore from 'cache-manager-redis-store'


@Module({
    imports:[CacheModule.register({
          store:async()=> await redisStore({
        socket: {host:'localhost',
        port:6379}
        })
    })],
 controllers:[RedisCacheController],
providers:[RedisCacheService,{
    provide:APP_INTERCEPTOR,
    useClass:CacheInterceptor
 }],
 exports:[RedisCacheModule]
})
export class RedisCacheModule{}
