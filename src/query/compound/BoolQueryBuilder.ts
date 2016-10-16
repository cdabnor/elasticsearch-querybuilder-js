import { QueryBuilder } from '../QueryBuilder';
import { BoostableQueryBuilder } from '../BoostableQueryBuilder';

export class BoolQueryBuilder
  implements QueryBuilder<BoolQueryBuilder>,
  BoostableQueryBuilder<BoolQueryBuilder> {

  _boost : Number;
  _boosted: Boolean;

  constructor() {
  }

  /**
   * {
   *   "bool": {
   *
   *   }
   * }
   */
  toJson() : Object {
    var data = {};
    var boolQuery = {};
    data['bool'] = boolQuery;

    if(this._boosted) {
      boolQuery['boost'] = this._boost;
    }

    return data;
  }

  boost(boost: Number) : BoolQueryBuilder {
    this._boosted = true;
    this._boost = boost;
    return this;
  }

  must(query: QueryBuilder<any>) : BoolQueryBuilder {
    return this;
  }
}
