import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Colaborador } from '../entities/colaborador.entity';

@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private readonly colaboradorRepository: Repository<Colaborador>,
  ) {}

  async findAll(): Promise<Colaborador[]> {
    return this.colaboradorRepository.find();
  }

  async findById(id: number): Promise<Colaborador> {
    const colaborador = await this.colaboradorRepository.findOne({
      where: { id },
    });

    if (!colaborador) {
      throw new NotFoundException(`Colaborador com id ${id} não encontrado`);
    }

    return colaborador;
  }

  async findAllByNome(nome: string): Promise<Colaborador[]> {
    return this.colaboradorRepository.find({
      where: { nome: ILike(`%${nome}%`) },
    });
  }

  async create(colaborador: Colaborador): Promise<Colaborador> {
    return this.colaboradorRepository.save(colaborador);
  }

  async update(colaborador: Colaborador): Promise<Colaborador> {
    return this.colaboradorRepository.save(colaborador);
  }

  async delete(id: number): Promise<void> {
    await this.colaboradorRepository.delete(id);
  }
}
