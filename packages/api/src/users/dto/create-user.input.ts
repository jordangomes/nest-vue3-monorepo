import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
 
  @Field(() => String, { description: 'Username' })
  username: string

  @Field(() => String, { description: 'Users Name' })
  name: string

  @Field(() => String, { description: 'Email Address' })
  email: string

  @Field(() => String, { description: 'Password' })
  password: string
}
