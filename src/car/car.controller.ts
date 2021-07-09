import { CarService } from './car.service';
import { Controller, Get } from '@nestjs/common';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  async getCars() {
    return this.carService.getCars();
  }
}
