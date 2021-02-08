import { expect, should } from 'chai';
import itch from '../src/itch';

should();

describe('itch', () => {
   it('returns default value in case with no `match` clauses', () => {
      itch().scratch(1).should.equal(1);
      itch().scratch({ one: 1 }).should.deep.equal({ one: 1 });
      itch().scratch(() => {}).should.be.a('function');
      expect(itch().scratch()).to.be.undefined;
   });

   it('returns default value when there is no matching `match` clause', () => {
      itch(1)
      .match(2).then(true)
      .match(3).then(false)
      .scratch(100)
      .should.equal(100);

      expect(itch(1)
         .match(2).then(true)
         .match(3).then(false)
         .scratch())
      .to.be.undefined;
   });

   it('returns `then` value corresponding to matching `match` clause', () => {
      itch(1).match(1).then(1).scratch(2).should.equal(1);
      itch(false).match(false).then(true).scratch(false).should.equal(true);
      expect(itch().match().then().scratch(true)).to.be.undefined;
   });

   it('ignores subsequent matching `match` clauses', () => {
      itch(1)
      .match(1).then(true)
      .match(1).then(false)
      .scratch()
      .should.equal(true);

      itch(1)
      .match(2).then(false)
      .match(1).then(true)
      .match(1).then('one')
      .scratch()
      .should.equal(true);
   });

   it('supports matching of an element in given array', () => {
      itch(1)
      .matchOneOf([3, 2, 1]).then(true)
      .scratch()
      .should.equal(true);

      itch(1)
      .matchOneOf([]).then(false)
      .matchOneOf([2, 1, 1]).then(true)
      .matchOneOf([1]).then(false)
      .scratch(false)
      .should.equal(true);
   });

   it('supports a custom matching function', () => {
      itch(-1)
      .using((v, c) => c === -v)
      .match(1).then(true)
      .scratch()
      .should.equal(true);

      itch(1)
      .using((v, c) => c.some(cc => cc === v))
      .match([3, 2, 1]).then(true)
      .scratch()
      .should.equal(true);

      itch(() => true)
      .using((v, c) => v() == c())
      .match(() => NaN).then(false)
      .match(() => null).then(false)
      .match(() => 1).then(true)
      .scratch(false)
      .should.equal(true);
   });

   it('evaluates only matching `evaluate` arguments', () => {
      const thrower = () => {
         throw new Error();
      };
      const fiver = () => 5;

      itch(true)
      .match(false).evaluate(() => thrower())
      .match(true).evaluate(() => fiver())
      .scratch(6)
      .should.equal(5);

      itch(true)
      .match(false).then(7)
      .match(true).evaluate(() => fiver())
      .match(false).evaluate(() => thrower())
      .scratch(6)
      .should.equal(5);

      itch(true)
      .match(false).evaluate(() => thrower())
      .match(true).then(5)
      .scratch(6)
      .should.equal(5);

      itch(true)
      .match(false).then(0)
      .scratchEvaluate(() => 1)
      .should.equal(1);
   });
});
