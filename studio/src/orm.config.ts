import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'sjair',
  password: 'postgres',
  port: 5432, // 1
  host: 'localhost', // 2
  database: 'studio', // 3
  synchronize: true, // 4
  entities: ['dist/**/*.entity{.ts,.js}'], // 5
};
