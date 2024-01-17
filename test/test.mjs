import * as chai from 'chai';
import {duplicateCount} from '../codewars.js';

const expect = chai.expect;

describe('test', () => {
  it('На вход пустая', () => {
    expect(duplicateCount('')).to.equal(0);
  });

  it('На вход строка: abcde', () => {
    expect(duplicateCount("abcde")).to.equal(0);
  })  

  it('На вход строка: aabbcde. Повторяется a b ', () => {
    expect(duplicateCount("aabbcde")).to.equal(2);
  })  

  it('На вход строка: Indivisibility. Повторяется i', () => {
    expect(duplicateCount("Indivisibility")).to.equal(1);
  })  

  it('На вход строка: Indivisibilities, Повторяется i s', () => {
    expect(duplicateCount("Indivisibilities")).to.equal(2);
  })  
  it('На вход строка: aA11, Повторяется a 1', () => {
    expect(duplicateCount("aA11")).to.equal(2);
  })  
});
