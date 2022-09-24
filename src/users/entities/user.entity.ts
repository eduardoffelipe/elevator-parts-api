import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ROLES } from '~/enums';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  role: ROLES
}

export const UserSchema = SchemaFactory.createForClass(User);
