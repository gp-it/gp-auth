import { expect } from '@open-wc/testing';
import { Auth } from '../src/Auth';

describe('Auth', () => {
  it('Auth test', () => {
    const value = Auth.Test();
    expect(value).to.equal('test réussi');
  });
});
