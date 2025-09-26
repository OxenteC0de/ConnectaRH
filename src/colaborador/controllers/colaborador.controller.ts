import { ColaboradorService } from '../services/colaborador.service';
import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Colaborador} from '../entities/colaborador.entity';

@Controller('/colaboradores')
export class ColaboradorController {
    constructor (private readonly colaboradorService: ColaboradorService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Colaborador[]>{
        return this.colaboradorService.findAll();
    }
  // @Delete('/:id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // delete(@Param('id', ParseIntPipe) id: number) {
  //   return this.colaboradorService.delete(id)
  // }
}