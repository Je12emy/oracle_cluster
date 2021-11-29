import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "oracle",
      host: "",
      port: 123,
      username: "sys",
      password: "root",
      database: "orcl",
      entities: [],
      synchronize: false
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true
    }),
    EmployeesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
