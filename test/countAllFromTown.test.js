describe('The countAllFromTown function', function(){

    it('compare the parameter and says how much are from the CL location', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CL'),3)
    });

    it('compare the parameter and says how much are from the CY location', function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341','CY'),1)
    });
    it('should show an empty number if you insert no string to count', function(){
        assert.equal(countAllFromTown('','CY'),0)
    });
  });
