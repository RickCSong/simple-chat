var expect = chai.expect;

if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("a group of tests", function(){
      it("should respect equality", function(){
        expect(5).to.equal(5);
      });
    });
  });
}
