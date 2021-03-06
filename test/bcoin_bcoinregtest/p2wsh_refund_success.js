const {test} = require('tap');

const {refundSuccess} = require('./../macros');

[false, true].forEach(isRefundToPublicKeyHash => {
  test(`p2wsh refund test: is pkhash? ${isRefundToPublicKeyHash}`, t => {
    return refundSuccess({
      daemon: 'bcoin',
      is_refund_to_public_key_hash: isRefundToPublicKeyHash,
      network: 'bcoinregtest',
      swap_type: 'p2wsh',
    },
    err => {
      if (!!err) {
        console.log(err);
        throw new Error('FailedRefundSuccess');
      }

      t.end();

      return;
    });
  });
});

