import { Injectable } from '@nestjs/common';
import {  createCvDto } from './dto/create-cv.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CV } from '../entities';
import { Repository } from 'typeorm';
import { updateCvDto } from './dto/update-cv.dto';

@Injectable()
export class CvsService {
	constructor(@InjectRepository(CV) private readonly cvRepo : Repository<CV>){}
	create(createCvDto: createCvDto) {
		return this.cvRepo.save(createCvDto);
	}

	findAll() {
		return this.cvRepo.find();
	}

	findOne(id: string) {
		return this.cvRepo.findOne({where : {id}});
	}

	update(id: number, updateCvDto: updateCvDto) {
		return this.cvRepo.update(id, updateCvDto);
	}

	remove(id: number) {
		return this.cvRepo.delete(id);
	}
}

