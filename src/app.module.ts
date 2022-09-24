import { Module } from '@nestjs/common';
import { ConfigModule, MongooseModule } from '~/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule,
    MongooseModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
