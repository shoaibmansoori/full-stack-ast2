import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/signup'), SignupModule], 
})
export class AppModule {}
