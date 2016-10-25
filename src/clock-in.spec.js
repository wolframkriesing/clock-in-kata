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

    it('sends clock-in with coordinates when GPS is available', () => {
    });

    it('does NOT send clock-in when no GPS is available', () => {
      return sendClockIn(gpsIsNotAvailable)
        .then(() => assert(false, 'Promise should have been rejected'))
        .catch();
    });

    it('warns the user when no GPS is available', () => {

    });
  });

  context('GPS is optional', () => {
    it('does NOT send GPS data when no GPS is available', () => {

    });
  });
});
