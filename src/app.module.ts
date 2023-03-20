import { Module } from '@nestjs/common';
import { cacheModule } from './rediscache/cache.module';

@Module({
  imports: [cacheModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
