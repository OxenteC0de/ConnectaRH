import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Colaborador } from './colaborador/entities/colaborador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '0905',
      database: 'connectarh',
      entities: [Colaborador],
      synchronize: true,
    }),
    ColaboradorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
