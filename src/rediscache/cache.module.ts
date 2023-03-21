import { Module,CacheModule, CacheInterceptor} from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import {  RedisCacheController } from "./cache.controller";
import {  RedisCacheService } from "./cache.service";
import {redisStore} from 'cache-manager-redis-store'


@Module({
    imports:[
        CacheModule.register({
         // @ts-ignore
        store: async()=>await redisStore({
        socket: {
            host:'127.0.0.1',
        port:6379}
        })
        
    })],
 controllers:[RedisCacheController],
providers:[RedisCacheService,{
    provide:APP_INTERCEPTOR,
    useClass:CacheInterceptor
 }],
 exports:[]
})
export class RedisCacheModule{}
