import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddressDTO } from './dto/address.dto';
import { GoogleMapRepository } from './googleMap.repository';

@Injectable()
export class GoogleMapService {
  constructor(private readonly googleMapRepository: GoogleMapRepository) {}

  public async setAddresses(addressDTO: AddressDTO): Promise<any> {
    const { userId, addresses } = addressDTO;
    try {
      let user = await this.googleMapRepository.findOne(addressDTO.userId);
      if (!user) {
        await this.googleMapRepository.create(addressDTO);
        return {
          statusCode: 201,
          success: true,
        };
      }
      user.addresses.push(addresses);
      await this.googleMapRepository.updateOne(userId, user.addresses);

      return {
        statusCode: 204,
        success: true,
      };
    } catch (err) {
      throw new HttpException('Problem with creating or updating dates', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
