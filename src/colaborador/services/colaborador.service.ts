import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Colaborador } from '../entities/colaborador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
  ) {}

  async findAll(): Promise<Colaborador[]>{
    return await this.colaboradorRepository.find();
  }

  // async delete(id: number): Promise<DeleteResult> {
  //   await this.findById(id);
  //   return await this.collaboradorRepository.delete(id);
  // }
}
