import zod from 'zod';

const pokeValSchema = zod.object({
  name: zod.string().min(1, 'Name is required'),
  height: zod.number().min(0, 'Height is required'),
  weight: zod.number().min(0, 'Weight is required'),
  types: zod.array(zod.string()).min(1, 'At least one type is required'),
});

const paramListSchema = zod.object({
  limit: zod.number().min(0),
  skip: zod.number().min(0),
});

function pokeMid(req, res, next) {
  const poke = req.body;
  pokeValSchema.parse(poke);
  next();
}

function paramListMid(req, res, next) {
  const { limit, skip } = req.query;
  paramListSchema.parse({ limit: Number(limit), skip: Number(skip) });
  next();
}

export {pokeMid, paramListMid}