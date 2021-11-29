import { Resolver, Query ,Args, Int } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}

  @Query(() => [Employee], { name: 'employees' })
  findAll() {
    return this.employeesService.findAll();
  }

  @Query(() => Employee, { name: 'employee' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.employeesService.findOne(id);
  }
}
