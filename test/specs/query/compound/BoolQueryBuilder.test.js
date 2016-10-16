'use strict';

var BoolQueryBuilder =
  require('../../../../dist/query/compound/BoolQueryBuilder').BoolQueryBuilder;

var subject;

describe('BoolQueryBuilder class', function() {

  beforeEach(function() {
    subject = new BoolQueryBuilder();
  });

  it('should create empty bool query', function() {
    expect(subject.toJson()).to.deep.equal({
      'bool': {
      }
    });
  });

  it('should add boost to query', function() {
    subject.boost(2.0);
    expect(subject.toJson()).to.deep.equal({
      'bool': {
        'boost': 2.0
      }
    });
  });

});
