define([
  'intern!bdd',
  'intern/chai!expect',
  'platform/ultralight-platform.min',
  'customelement/ult-action.min'
], function(bdd, expect, element) {
  var describe = bdd.describe.bind(bdd)
  var it = bdd.it.bind(bdd)

  describe('ult-action', function() {
    it('should exist', function() {
      expect(element).to.exist
    })
  })

})
