import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: 'Users ID' })
  _id: string

  @Field(() => String, { description: 'Username' })
  username: string

  @Field(() => String, { description: 'Users Name' })
  name: string

  @Field(() => String, { description: 'Email Address' })
  email: string

  @Field(() => String, { description: 'Password' })
  password: string
}
