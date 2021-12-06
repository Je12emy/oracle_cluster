import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';
import CreateEmployee from './dto/create-employee.dto';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) { }

  @Query(() => [Employee], { name: 'employees' })
  findAll() {
    return this.employeesService.findAll();
  }

  @Query(() => Employee, { name: 'employee' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.employeesService.findOne(id);
  }

  @Mutation(() => Employee)
  createEmployee(@Args('createEmployeeInput') createEmployeeInput: CreateEmployee) {
    return this.employeesService.create(createEmployeeInput);
  }

  @Mutation(() => Employee)
  deleteEmployee(@Args('id', { type: () => Int }) id: number){
    return this.employeesService.delete(id);
  }
}
