import assert from 'assert';

const gpsIsAvailable = new Promise((resolve, reject) => {
  resolve(availableGpsCoordinates);
});

const gpsIsNotAvailable = new Promise((resolve, reject) => {
  reject();
});

describe('time tracking', () => {
  context('GPS is required', () => {
    it('sends clock-in when GPS is available', () =>
      sendClockIn(gpsIsAvailable)
    );

    it('sends clock-in with coordinates when GPS is available', (done) => {
    });

    it('does NOT send clock-in when no GPS is available', (done) => {
      sendClockIn(gpsIsNotAvailable)
        .then(() => assert(false, 'Promise should have been rejected'))
        .catch(done);
    });

    it('warns the user when no GPS is available', () => {

    });
  });

  context('GPS is optional', () => {
    it('does NOT send GPS data when no GPS is available', () => {

    });
  });
});
