import { Module } from '@nestjs/common';
import { RedisCacheModule } from './rediscache/cache.module';

@Module({
  imports: [RedisCacheModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
