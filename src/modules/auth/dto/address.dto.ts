import { IsNotEmpty } from 'class-validator';

export class AddressDTO {
  @IsNotEmpty()
  lat: string

  @IsNotEmpty()
  lng: string
}
