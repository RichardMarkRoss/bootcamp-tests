describe('The isFromBellville function', function(){

  it('if the number plate starts with CY should be true',function(){
    assert.equal(isFromBellville('CY 654988'),true)
  });
  it('if the number plate is anything other than CY it should display false',function(){
    assert.equal(isFromBellville('CA 56485'),false)
  });
});
