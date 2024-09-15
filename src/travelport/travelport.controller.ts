import { Body, Controller, Post, Req } from '@nestjs/common';
import { TravelportService } from './travelport.service';

const oneWayEndpoint = 'catalog/search/catalogproductofferings';

@Controller()
export class TravelportController {
  constructor(private readonly tpService: TravelportService) {}

  @Post(oneWayEndpoint)
  async catalogproductofferings(@Body() body: any, @Req() req: any) {
    return await this.tpService.catalogproductofferings(body, req.url);
  }

  @Post(oneWayEndpoint + '/buildnext')
  buildnext(@Body() body: any, @Req() req: any) {
    return this.tpService.buildnext(body, req.url);
  }
}
