import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees/entities/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "oracle",
      host: "localhost",
      port: 1521,
      sid: 'orcl',
      username: "hr",
      password: "root",
      database: "orcl",
      entities: [Employee],
      synchronize: false,
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gpl'
    }),
    EmployeesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
