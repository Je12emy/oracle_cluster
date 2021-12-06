import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("EMPLOYEES")
@ObjectType()
export class Employee {

  @PrimaryColumn()
  @Column({name: "EMPLOYEE_ID", type:"number", nullable: false, primary: true })
  @Field(() => Int, { description: 'Example field (placeholder)' })
  employeeId: number;

  @Column({ name: "FIRST_NAME", type: "varchar2", length: 20, nullable: true })
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Column({ name: "LAST_NAME", type: "varchar2", length: 25, nullable: true })
  @Field(() => String, {nullable: true} )
  lastName?: string;
  
  @Column({ name: "EMAIL", type: "varchar2", length: 25, nullable: false })
  @Field(() => String)
  email: string;
  
  @Column({ name: "PHONE_NUMBER", type: "varchar2", length: 20, nullable: true })
  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Column({ name: "HIRE_DATE", type: "date", nullable: true })
  @Field(() => String)
  hireDate: string;

  @Column({ name: "JOB_ID", type: "varchar2", nullable: false })
  @Field(() => String)
  jobId: number;

  @Column({ name: "SALARY", type: "number", nullable: false, precision: 2 })
  @Field(() => Float, { nullable: true })
  salary?: number;

  @Column({ name: "COMMISSION_PCT", type: "number", nullable: true, precision: 2 })
  @Field({ nullable: true })
  commissionPct?: number;

  @Column({ name: "MANAGER_ID", type: "number", nullable: false })
  @Field(() => Int, { nullable: true })
  managerId?: number;

  @Column({ name: "DEPARTMENT_ID", type: "number", nullable: false })
  @Field(() => Int, { nullable: true })
  departmentId?: number;
}
