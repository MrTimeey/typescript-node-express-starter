import server from '../../server/server';
import request from 'supertest';
import { describe, expect, it } from 'vitest';

describe('actuator.ts', () => {
  describe('/actuator/health', () => {
    it('GET /liveness', async () => {
      const response = await request(server).get('/actuator/health/liveness');
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('application/json');
      expect(response.body.status).toBe('UP');
    });
    it('GET /readiness', async () => {
      const response = await request(server).get('/actuator/health/readiness');
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('application/json');
      expect(response.body.status).toBe('UP');
    });
  });
});
