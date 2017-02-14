const V2 = require('../../lib/apis/v2');
const assert = require('assert');
const CompanyAPI  = require('../../lib/apis/v2/company');
const EmailVerificationAPI  = require('../../lib/apis/v2/email-verification');
const LocationAPI  = require('../../lib/apis/v2/location');
const NameAPI  = require('../../lib/apis/v2/name');
const PersonAPI  = require('../../lib/apis/v2/person');
const StatsAPI  = require('../../lib/apis/v2/stats');

describe('V2', () => {
    it('should create instances', () => {
        const instance = new V2();
        assert.ok(instance.person instanceof PersonAPI);
        assert.ok(instance.company instanceof CompanyAPI);
        assert.ok(instance.name instanceof NameAPI);
        assert.ok(instance.location instanceof LocationAPI);
        assert.ok(instance.stats instanceof StatsAPI);
        assert.ok(instance.emailVerification instanceof EmailVerificationAPI);
    });

    it('cardReader should not be implemented', () => {
        try {
            const instance = new V2();
            const cr =instance.cardReader;
        } catch(e) {
            assert.equal(e, 'Not Implemented');
        }
    });
});