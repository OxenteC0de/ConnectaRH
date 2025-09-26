import { ColaboradorService } from '../services/colaborador.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Put } from "@nestjs/common";
import { Colaborador} from '../entities/colaborador.entity';

@Controller('/colaboradores')
export class ColaboradorController {
    constructor (private readonly colaboradorService: ColaboradorService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Colaborador[]>{
        return this.colaboradorService.findAll();
    }
    
    @Get(':id')
    findByid(@Param('id')id: string): Promise<Colaborador>{
      return  this.colaboradorService.findById(Number(id));
    } 
  
    // @Put()
    // @HttpCode(HttpStatus.OK)
    // update(@Body() collaborador: Colaborador): Promise<Colaborador> {
    //     return this.colaboradorService.update(collaborador);
    // } 
  
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.colaboradorService.delete(id)
    }
}