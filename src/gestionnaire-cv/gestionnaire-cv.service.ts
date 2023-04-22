import { Injectable } from '@nestjs/common';

@Injectable()
export class GestionnaireCvService {
  create(createGestionnaireCvDto) {
    return 'This action adds a new gestionnaireCv';
  }

  findAll() {
    return `This action returns all gestionnaireCv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gestionnaireCv`;
  }

  update(id: number, updateGestionnaireCvDto) {
    return `This action updates a #${id} gestionnaireCv`;
  }

  remove(id: number) {
    return `This action removes a #${id} gestionnaireCv`;
  }
}
