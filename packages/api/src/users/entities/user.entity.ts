import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  
  @Prop({ unique: true, required: true })
  @Field(() => String, { description: 'Username' })
  username: string

  @Prop({ required: true })
  @Field(() => String, { description: 'Users Name' })
  name: string

  @Prop({ unique: true, required: true })
  @Field(() => String, { description: 'Email Address' })
  email: string

  @Prop({ unique: true, required: true })
  @Field(() => String, { description: 'Users password' })
  password: string
}


export const UserSchema = SchemaFactory.createForClass(User)