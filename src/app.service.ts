import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'hello world',
      with: 'sabbir | dhrubo vai',
    };
  }
}
