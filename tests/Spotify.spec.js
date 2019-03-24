import { expect } from 'chai';
import { Spotify } from '../src/spotify';

describe('Spotify', () => {
  it('should be an object', () => {
    expect(Spotify).to.be.an('object');
  });
});
