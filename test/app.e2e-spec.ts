import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const nbOfAllArrondissement = 20;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('GET /arrondissements', function () {
    it('responds with array of geojson arrondissements', async function () {
      //test
      const response = await request(app.getHttpServer()).get(
        '/arrondissements',
      );

      //assert
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body.length).toEqual(nbOfAllArrondissement);
    });
  });

  //récupérer le paramètre de la requète
  describe('GET /wrongRoute', function () {
    it('responds with an error 404', async function () {
      const response = await request(app.getHttpServer()).get('/wrongRoute');
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.status).toEqual(404);
      expect(response.body.error).toEqual('Not Found');
      expect(response.body.message).toEqual('Cannot GET /wrongRoute');
      console.log(request);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
