import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AddressDTO } from "./dto/address.dto";
import { JwtAuthGuard } from "../auth/strategy/jwt-auth.guard";
import { GoogleMapService } from "./googleMap.service";


@UseGuards(JwtAuthGuard)
@Controller('google-map')

export class GoogleMapController {

  constructor(private readonly googleMapService: GoogleMapService) { }

  @UseGuards(JwtAuthGuard)
  @Post('addresses')
  private getAddresses(@Body() addressDTO: AddressDTO): Promise<any> {
    return this.googleMapService.setAddresses(addressDTO);
  }


}