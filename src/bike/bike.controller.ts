import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Query,
  Body,
  Patch,
} from '@nestjs/common';
import { CreateBikeDto } from './dto/create-bike.dto';
import { BikeService } from './bike.service';
import { UpdateBikeDto } from './dto/update-bike.dto';
@Controller('bike')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  @Get()
  getBikes(@Query('cc') cc: string) {
    if (cc) {
      const ccNum = parseInt(cc, 10) as 1000 | 120;
      return this.bikeService.getBikes(ccNum);
    }
    return this.bikeService.getBikes();
  }

  @Get(':id')
  getOneBike(@Param('id') id: string) {
    return this.bikeService.getBike(+id);
  }

  @Post()
  addBike(@Body() createBikeDto: CreateBikeDto): void {
    return this.bikeService.addBike(createBikeDto);
  }

  @Delete(':id')
  deleteBike(@Param('id') id: string) {
    return this.bikeService.deleteBike(+id);
  }

  @Patch(':id')
  updateBike(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikeService.updateBike(+id, updateBikeDto);
  }
}
