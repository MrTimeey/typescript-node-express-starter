import server from '../../server/server';
import request from 'supertest';
import { describe, expect, it } from 'vitest';

describe('ping.ts', () => {
  it('GET /ping', async () => {
    const response = await request(server).get('/api/ping');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    const regex = /^\d{2}\.\d{2}\.\d{4} - \d{2}:\d{2}$/;
    expect(response.body.pong).toMatch(regex);
  });
});
