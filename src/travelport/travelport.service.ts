import { Injectable } from '@nestjs/common';
import travelport from 'src/utils/axios';

@Injectable()
export class TravelportService {
  constructor() {}

  async catalogproductofferings(body: any, url: any): Promise<any> {
    const response = await travelport.post(url, body);
    return response.data;
  }

  async buildnext(body: any, url: any): Promise<any> {
    const response = await travelport.post(url, body);
    return response.data;
  }
}
