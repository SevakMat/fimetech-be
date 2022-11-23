import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://ClausterForMy:ClausterForMyPassing@cluster0.l9s4wwq.mongodb.net/test'),
    ConfigModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }  
