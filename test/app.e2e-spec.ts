import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const nbOfAllArrondissement = 20;
  const nbOfAllTournages = 8919;
  const nbOfTournagesFiltered = 248;
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

  describe('GET tournages', function () {
    it('responds with array of all tournage', async function () {
      //test
      const response = await request(app.getHttpServer()).get('/tournages');
      //assert
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body.length).toEqual(nbOfAllTournages);
    });

    it('responds with array of tournage of 75015 arrondissement', async function () {
      //test
      const response = await request(app.getHttpServer()).get(
        '/tournages/75015',
      );
      //assert
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body.length).toEqual(nbOfTournagesFiltered);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
