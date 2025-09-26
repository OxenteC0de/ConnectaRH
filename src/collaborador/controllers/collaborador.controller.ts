import { Controller } from "@nestjs/common";
import {CollaboradorService} from '../services/postagem.service';
import {Collaborador} from '../entities/collaborador.entity';

@Controller('collaborador')
export class Collaborador {
    constructor(private readonly collaboradorService: CollaboradorService) {}
    @get(':id')
    async findByid(@Param('id')id: string): Promise<Collaborador>{
        return wait this.collaboradorService.findById(Number(id));
    } 
    @put()
    @HttpCode(HttpStatus.ok)
    update(@Body() collaborador: Collaborador): Promise<Collaborador> {
        return this.collaboradorService.update(collaborador);
    } 
}