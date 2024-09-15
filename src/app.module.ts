import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelportModule } from './travelport/travelport.module';

@Module({
  imports: [TravelportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
