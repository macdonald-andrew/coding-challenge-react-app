// Every survey starts with these three questions, in this order. Do not modify this.
export const DEFAULT_QUESTIONS = ['cough_sentence', 'cough_blue', 'cough_length']

// All questions the app might ever ask. Do not modify this.
export const ALL_QUESTIONS = {
  'cough_sentence': {
    'wording': 'Is your child able to finish a sentence without needing a breath?',
    'if_yes_ask': [],
    'if_no_ask': [],
  },
  'cough_blue': {
    'wording': 'Are your child\'s lips or face turning blue?',
    'if_yes_ask': [],
    'if_no_ask': [],
  },
  'cough_length': {
    'wording': 'Has your child had a cough for more than 3 days?',
    'if_yes_ask': ['cough_worsening', 'cough_ribs_pulling'],
    'if_no_ask': ['cough_wheezing']
  },
  'cough_ribs_pulling': {
    'wording': 'When your child breathes, is the skin around their ribs pulling in with each breath and outlining their ribs?',
    'if_yes_ask': ['cough_pain'],
    'if_no_ask': [],
  },
  'cough_pain': {
    'wording': 'Does your child have pain when trying to take a breath?',
    'if_yes_ask': ['cough_ingest'],
    'if_no_ask': [],
  },
  'cough_wheezing': {
    'wording': 'Is your child\'s breathing between coughs noisy?',
    'if_yes_ask': ['cough_ingest'],
    'if_no_ask': [],
  },
  'cough_worsening': {
    'wording': 'Since your child\'s cough started, has it been getting worse?',
    'if_yes_ask': [],
    'if_no_ask': [],
  },
  'cough_ingest': {
    'wording': 'Did the cough start after your child choked on something, even if it was a very minor incident?',
    'if_yes_ask': [],
    'if_no_ask': [],
  }
}