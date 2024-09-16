import server from '../../server/server';
import request from 'supertest';
import { describe, expect, it } from 'vitest';

describe('notFound.ts', () => {
  it('GET /non/existing/endpoint', async () => {
    const response = await request(server).get('/non/existing/endpoint');
    expect(response.status).toBe(404);
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.body.msg).toBe('Ohh you are lost, read the API documentation to find your way back home');
  });
});
