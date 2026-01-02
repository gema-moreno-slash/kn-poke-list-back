import {jest, test} from '@jest/globals';
import pokemonCtrl from '../src/controllers/pokemon-ctrl.js';

jest.unstable_mockModule('../src/models/pokemon-model.js', () => {
  return jest.fn().mockImplementation((poke) => ({
    save: jest.fn().mockResolvedValue({ ...poke, _id: 'mockid' })
  }));
});

const mockReq = (body = {}) => ({ body });
const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('pokemonCtrl', () => {
  describe('postPokemon', () => {
    it('debe responder con 201 y el pokemon guardado', async () => {
      const req = mockReq({ name: 'Pikachu', height: 4, weight: 60, types: ['Electric'] });
      const res = mockRes();
      await pokemonCtrl.postPokemon(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ name: 'Pikachu' }));
    });
  });
});
