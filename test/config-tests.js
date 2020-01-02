const assert = require('assert');
const config = require('../lib/apis/config');

describe('Config', () => {
  it('should have an api url', () =>
    assert.ok(config.url && config.url.length > 0));
  it('should have an app url', () =>
    assert.ok(config.contactsUrl && config.contactsUrl.length > 0));
  it('should have expected api url', () =>
    assert.equal('https://api.contactsplus.com', config.url));
  it('should have expected app url', () =>
    assert.equal('https://app.contactsplus.com', config.contactsUrl));
});
