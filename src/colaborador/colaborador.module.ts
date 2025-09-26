import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColaboradorService } from './services/colaborador.service';
import { ColaboradorController } from './controllers/colaborador.controller';
import { Colaborador } from './entities/colaborador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  controllers: [ColaboradorController],
  providers: [ColaboradorService],
})
export class ColaboradorModule {}
