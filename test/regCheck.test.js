describe('regCheck', function(){

  it('should check if vehicles ends with GP', function(){
    assert.equal(regCheck('123456 GP', 'GP'),true)
  });

  it('should check if vehicles does not end with GP', function(){
    assert.equal(regCheck('987456 CY'),false)
  });

});
