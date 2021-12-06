import { Field, Float, InputType, Int } from "@nestjs/graphql";
import { IsDecimal, IsEmail, IsInt, IsString } from "class-validator";


@InputType()
export default class CreateEmployee {

  @Field(() => Int, { description: 'Example field (placeholder)' })
  @IsInt()
  employeeId: number;

  @Field(() => String, { nullable: true })
  @IsString()
  firstName?: string;

  @Field(() => String )
  @IsString()
  lastName: string;
  
  @Field(() => String)
  @IsString()
  @IsEmail()
  email: string;
  
  @Field(() => String, { nullable: true })
  @IsString()
  phoneNumber?: string;

  @Field(() => String)
  @IsString()
  hireDate: string;

  @Field(() => String)
  @IsInt()
  jobId: number;

  @Field(() => Float, { nullable: true })
  @IsDecimal()
  salary?: number;

  @Field({ nullable: true })
  @IsDecimal()
  commissionPct?: number;

  @Field(() => Int, { nullable: true })
  @IsDecimal()
  managerId?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  departmentId?: number;
}
