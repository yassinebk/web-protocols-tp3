import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GestionnaireCvService } from './gestionnaire-cv.service';

@Controller('gestionnaire-cv')
export class GestionnaireCvController {
  constructor(private readonly gestionnaireCvService: GestionnaireCvService) {}
  

  @Get()
  findAll() {
    return this.gestionnaireCvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gestionnaireCvService.findOne(+id);
  }
}
