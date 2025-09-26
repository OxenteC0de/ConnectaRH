import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Collaborador } from '../controllers/collaborador.controller';
import { Repository } from 'typeorm';

@Injectable()
export class CollaboradorService {
  constructor(
    @InjectRepository(Collaborador)
    private collaboradorRepository: Repository<Collaborador>,
  ) {}

  async findById(id: number): Promise<Collaborador>{
    const collaborador = await this.collaboradorRepository.findOne({
      where: {id},
    });
    if (!collaborador){
      throw new HttpException('Colaborador não foi localizado!',
        HttpStatus.NOT_FOUND,
      );
      return collaborador;
    }
  }
  async update(collaborador: Collaborador): Promise<Collaborador>{
    await this.findById(collaborador.id)
    return await this.collaboradorRepository.save(collaborador);
  }

}