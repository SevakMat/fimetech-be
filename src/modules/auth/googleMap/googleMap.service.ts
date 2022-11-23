import { Injectable } from "@nestjs/common";
import { AddressDTO } from "../dto/address.dto";

@Injectable()
export class GoogleMapService {

  public getAddresses(addressDTO: AddressDTO[]): Promise<any> {
    // ste petqa pahel datan yst useri u xrgel ml i backin
    console.log(addressDTO);

    return {
      addresses: addressDTO,
      success: "success"
    } as any
  }

}