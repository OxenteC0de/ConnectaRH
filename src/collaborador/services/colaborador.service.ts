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

  // async delete(id: number): Promise<DeleteResult> {
  //   await this.findById(id);
  //   return await this.collaboradorRepository.delete(id);
  // }
}
