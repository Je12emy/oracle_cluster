import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("EMPLOYEES")
@ObjectType()
export class Employee {
  @PrimaryGeneratedColumn({ name: "EMPLOYEE_ID" })
  @Field(() => Int, { description: 'Example field (placeholder)' })
  employeeId: number;

  @Column({ name: "FIRST_NAME", type: "varchar2", length: 20, nullable: true })
  @Field(() => String)
  firstName: string;

  @Column({ name: "LAST_NAME", type: "varchar2", length: 25, nullable: true })
  @Field(() => String)
  lastName: string;
  
  @Column({ name: "EMAIL", type: "varchar2", length: 25, nullable: false })
  @Field(() => String)
  email: string;
  
  @Column({ name: "PHONE_NUMBER", type: "varchar2", length: 20, nullable: true })
  @Field(() => Int)
  phoneNumber: number;

  @Column({ name: "HIRE_DATE", type: "date", nullable: true })
  @Field(() => String)
  hireDate: string;

  @Column({ name: "JOB_ID", type: "varchar2", nullable: false })
  @Field(() => String)
  jobId: number;

  @Column({ name: "SALARY", type: "number", nullable: false, precision: 2 })
  @Field(() => Int)
  salary: number;

  @Column({ name: "COMMISSION_PCT", type: "number", nullable: false, precision: 2 })
  @Field(() => Int)
  commisionPct: number;

  @Column({ name: "MANAGER_ID", type: "number", nullable: false })
  @Field(() => Int)
  managerId: number;

  @Column({ name: "DEPARTMENT_ID", type: "number", nullable: false })
  @Field(() => Int)
  departmentId: number;
}
