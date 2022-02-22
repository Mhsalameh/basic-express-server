`use strict`;
const supertest= require('supertest');
const server =require('../src/server.js');
const request=supertest(server.app);

describe("testing server",()=>{


it('testing 404 with bad route',async()=>{
    const response = await request.get('/persoone?name=salameh')
    expect(response.status).toEqual(404)
})

it('testing 404 with bad method', async()=>{
    const response = await request.post('/person?name=salameh');
    expect(response.status).toEqual(404);
})

it('testing 500 if no name in query', async()=>{
    let response = await request.get('/person');
    expect(response.status).toEqual(500);
})

it('testing object in /person', async()=>{
    const response= await request.get('/person?name=salameh')
    const name = response.body.name;
    expect(typeof response.body).toEqual('object')
    expect(name).toEqual('salameh')

})

it('testing 200 in /person', async()=>{
    const response= await request.get('/person?name=salameh')
    expect(response.status).toEqual(200)

})

})