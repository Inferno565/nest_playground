import { Injectable } from '@nestjs/common';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikeService {
  private bikes = [
    { id: 1, name: 'h2r', cc: 1000 },
    { id: 2, name: 'panigale', cc: 1000 },
    { id: 3, name: 'splendor', cc: 120 },
  ];

  getBikes(cc?: 1000 | 120) {
    if (cc) {
      return this.bikes.filter((bike) => bike.cc === cc);
    }
    return this.bikes;
  }

  getBike(id: number) {
    const bike = this.bikes.find((bike) => bike.id === id);
    if (!bike) {
      throw new Error('Bike not found');
    }

    return bike;
  }

  addBike(createBikeDto: CreateBikeDto) {
    const newBike = {
      ...createBikeDto,
      id: Date.now(),
    };
    this.bikes.push(newBike);
    console.log(this.bikes);
  }

  deleteBike(id: number) {
    const deleted = this.getBike(id);
    // console.log(deleted);
    this.bikes = this.bikes.filter((bike) => bike.id !== id);
    // console.log(this.bikes);
    return this.bikes;
  }

  updateBike(id: number, updateBikeDto: UpdateBikeDto) {
    const { name, cc } = updateBikeDto;
    this.getBike(id).cc = cc;
    this.getBike(id).name = name;
    
  }
}
