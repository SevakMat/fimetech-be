import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = Levle1 & Document;

@Schema()
export class Levle1 {
  @Prop()
  userId: string;

  @Prop()
  addresses: [
    [
      {
        lat: string;
        lng: string;
      }
    ]
  ]
}

export const UserSchema = SchemaFactory.createForClass(Levle1);


// {
//   userId: ""
//   addreses:[
//    [
//     {
//       lat:""
//       lng:""
//     },
//     {
//       lat:""
//       lng:""
//     }    {
//       lat:""
//       lng:""
//     }
//    ]
//   ],
//   [
//     {
//       lat:""
//       lng:""
//     },
//     {
//       lat:""
//       lng:""
//     }    {
//       lat:""
//       lng:""
//     }
//    ]
//   ],
// }