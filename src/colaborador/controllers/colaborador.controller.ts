import { ColaboradorService } from '../services/colaborador.service';
import { Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Colaborador} from '../entities/colaborador.entity';

@Controller('/colaboradores')
export class ColaboradorController {
    constructor (private readonly colaboradorService: ColaboradorService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Colaborador[]>{
        return this.colaboradorService.findAll();
    }
    
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Colaborador>{
      return this.colaboradorService.findById(id);
    }
  
    @Put()
    @HttpCode(HttpStatus.ok)
    update(@Body() colaborador: Colaborador): Promise<Colaborador> {
    return this.colaboradorService.update(colaborador);
    } 
  
    // @Delete('/:id')
    // @HttpCode(HttpStatus.NO_CONTENT)
    // delete(@Param('id', ParseIntPipe) id: number) {
    //   return this.colaboradorService.delete(id)
    // }
}