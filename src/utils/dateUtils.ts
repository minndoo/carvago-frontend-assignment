// comment for reviewer
// Not sure what tests should I add here as the util is using built-in javascript functions atm.

export const getCurrentDateCS = () =>
  new Date().toLocaleDateString('cs-CZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
