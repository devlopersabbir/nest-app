import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'hello world',
      with: 'sabbir | dhrubo vai',
      descriptions:
        'If you need to add more commands, adjust the directory structure, or handle specific edge cases (e.g., restarting a service after npm install), let me know, and I can further customize the workflow.',
    };
  }
}
