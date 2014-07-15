describe('coinCollector', function() {
  it("compares one number to another number", function() {
    coinCollector(43).should.eql([1,1,1,3]);
  });
});
