import server from '../../server/server';
import request from 'supertest';
import { describe, expect, it } from 'vitest';

describe('apiDoc.ts', () => {
  it('GET /doc', async () => {
    const response = await request(server).get('/api/doc').set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    console.log(response.body.providedFiles);
    const regex = /^(.*)\/openapi.json$/;
    expect(response.body.providedFiles[0]).toMatch(regex);
  });
  it('GET /doc/openapi.json', async () => {
    const response = await request(server).get('/api/doc/openapi.json').set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toContain('application/json');
    expect(response.body).not.toBeNull();
  });
});
