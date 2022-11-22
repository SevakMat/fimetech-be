import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop([String])
  email: string;

  @Prop([String])
  phoneNumber: string;

  @Prop([String])
  password: string;

  @Prop([String])
  accessToken: string;

  @Prop([String])
  reffreshToken: string;

}

export const UserSchema = SchemaFactory.createForClass(User);