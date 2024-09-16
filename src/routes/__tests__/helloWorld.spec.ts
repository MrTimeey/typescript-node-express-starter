import server from '../../server/server';
import request from 'supertest';
import { describe, expect, it } from 'vitest';

describe('helloWorld.ts', () => {
  it('GET /helloWorld', async () => {
    const response = await request(server).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.body.msg).toBe('Hello World!');
  });
});
