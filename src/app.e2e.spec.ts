import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { INestApplication } from '@nestjs/common';

describe('App', () => {
  let app: INestApplication;
  const appService = { getHello: () => ['Hello World!'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET hello`, () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(appService.getHello());
  });

  afterAll(async () => {
    await app.close();
  });
});
