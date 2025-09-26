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
}
