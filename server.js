import Fastify from 'fastify'
import PriceList from './model/Price.js';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: true
})

fastify.register(cors, {
    origin: '*'
  });

fastify.get('/pricelist', async function handler (request, reply) {
    try{
    const offset=request.params?.offset?? 1;
    const limit=request.params?.limit?? 100;
   const data= await PriceList.findAll();
    const response={
        offset,limit,data}
  return response;
} catch (error) { 
    return error;
}
})

fastify.post('/save', async function handler (request, reply) {
  try{
  const data=JSON.parse(request.body);
  for (const item of data) {
    await PriceList.upsert(item);
  }
  //const result= await PriceList.bulkCreate(data);
return 'updated';
} catch (error) { 
  return error;
}
})

try {
  await fastify.listen({
    port: process.env.PORT || 3000, // Required for Render
    host: '0.0.0.0',                // Required for Render
  })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}

