import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Colaborador } from '../controllers/colaborador.controller';
import { Repository } from 'typeorm';

@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private collaboradorRepository: Repository<Colaborador>,
  ) {}

  async findById(id: number): Promise<Colaborador>{
    const colaborador = await this.colaboradorRepository.findOne({
      where: {id},
    });
    if (!colaborador){
      throw new HttpException('Colaborador não foi localizado!',
        HttpStatus.NOT_FOUND,
      );
      return colaborador;
    }
  }

}