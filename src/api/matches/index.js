import isString from 'lodash/isString';
import parser from '../parser';

const ENDPOINT_PREFIX = 'matches';

export default (http) => {
  async function single(matchId) {
    if (!matchId) {
      return new Error('Expected required matchId. Usage: .single(matchId)');
    }

    if (!isString(matchId)) {
      return new Error('Expected a string for matchId');
    }

    const endpoint = `${ENDPOINT_PREFIX}/${matchId}`;
    try {
      const body = await http.execute('GET', endpoint);
      return parser('match', body);
    } catch (e) {
      return e;
    }

  }

  async function collection(collectionOptions = {}) {
    const now = new Date();
    const minus3Hours = new Date(new Date() * 1 - 1000 * 3600 * 3);

    const defaults = {
      page: { offset: 0, limit: 50 },
      sort: 'createdAt',
      filter: { 'createdAt-start': minus3Hours.toISOString(), 'createdAt-end': now.toISOString(), playerNames: [], teamNames: [] },
    };

    const query = { ...defaults, ...collectionOptions };

    try {
      const body = await http.execute('GET', `${ENDPOINT_PREFIX}`, query);

      return parser('matches', body);
    } catch (e) {
      return e;
    }
  }

  return { single, collection };
};
