/*
FIXME: defaultIntro is currently set as the TCC 2026 message because all cards
currently in circulation were handed out at that conference without a ?intro=
param. Before printing cards for a new audience:

  1. Add a new entry to intros for the new event/context
  2. Make defaultIntro a generic message
  3. Remove tcc2026 from intros (no cards will ever hit it via URL param)

TCC 2026 attendees who scan old cards will then get the generic message,
which is an acceptable tradeoff.
*/
export const intros = {
  tcc2026: {
    subject: 'Following up after TCC 2026',
    body: [
      'Hi Tyler,',
      '',
      'It was nice meeting you at TCC 2026 in San Antonio.',
      '',
      'I look forward to keeping in touch.',
    ].join('\r\n'),
  },
  // add future intros here, e.g. conf2027: { subject: '...', body: '...' }
};

export const defaultIntro = intros.tcc2026;
