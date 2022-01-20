import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger('app.service');

  getHello(): string {
    this.logger.log('return hello world');
    return 'Hello World!';
  }
}
