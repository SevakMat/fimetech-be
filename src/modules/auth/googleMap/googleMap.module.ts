import { Module } from '@nestjs/common';
import { GoogleMapService } from './googleMap.service';
import { GoogleMapController } from './googleMap.controller';

@Module({
  imports: [],
  controllers: [GoogleMapController],
  providers: [GoogleMapService]
})
export class GoogleMapModule { }