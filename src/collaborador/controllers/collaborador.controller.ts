import { Controller } from "@nestjs/common";
import {ColaboradorService} from '../services/postagem.service';
import {Colaborador} from '../entities/colaborador.entity';

@Controller('colaboradores')
export class Colaborador {
    constructor(private readonly colaboradorService: ColaboradorService) {}
    @get(':id')
    async findByid(@Param('id')id: string): Promise<Colaborador>{
        return wait this.colaboradorService.findById(Number(id));
    }  
}