var expect = chai.expect;

if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should have a Meteor version defined", function(){
        expect(Meteor.release).not.to.be.null;
      });
    });
  });
}
