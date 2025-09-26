import { Controller, Delete, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { ColaboradorService } from "../services/colaborador.service";

@Controller('collaboradores')
export class Colaborador {
  constructor(private readonly colaboradorService: ColaboradorService) {
    
  }
  // @Delete('/:id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // delete(@Param('id', ParseIntPipe) id: number) {
  //   return this.colaboradorService.delete(id)
  // }
}