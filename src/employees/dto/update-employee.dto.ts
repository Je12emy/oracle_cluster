import { Field, Float, InputType, Int } from "@nestjs/graphql";
import { IsDecimal, IsEmail, IsInt, IsOptional, IsString } from "class-validator";


@InputType()
export default class UpdateEmployee {
  
  @IsOptional()
  employeeId?: number;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  firstName?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  lastName?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  hireDate?: string;

  @Field(() => String, { nullable: true })
  @IsInt()
  @IsOptional()
  jobId?: number;

  @Field(() => Float, { nullable: true })
  @IsDecimal()
  @IsOptional()
  salary?: number;

  @Field({ nullable: true })
  @IsDecimal()
  @IsOptional()
  commissionPct?: number;

  @Field(() => Int, { nullable: true })
  @IsDecimal()
  @IsOptional()
  managerId?: number;

  @Field(() => Int, { nullable: true })
  @IsInt()
  @IsOptional()
  departmentId?: number;
}
