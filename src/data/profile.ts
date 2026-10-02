import type { Profile } from './types';

export const profile: Profile = {
  name: 'Muhammad Alshwikh',
  nickname: 'Dante',
  handle: 'DanteV91',
  role: 'AI Data Analyst · Machine Learning · Full-Stack · Cybersecurity (in progress)',
  location: 'Istanbul, Turkey',
  email: 'grayss1994@gmail.com',
  phone: '+90 531 253 96 81',
  links: {
    linkedin: 'https://linkedin.com/in/muhammad-alshwikh-34631039a',
    telegram: 'https://t.me/DanteV91',
    github: 'https://github.com/Da94-St',
    whatsapp: 'https://wa.me/905312539681'
  },
  bio:
    'Data-driven AI Specialist and Analyst. I work with statistical modeling, ' +
    'predictive analytics, machine learning, and full-stack development — ' +
    'delivering analysis for BCG, CBRE, and Skyscanner through project-based ' +
    'engagements. Multilingual across Arabic, English, German, Turkish, and ' +
    'Japanese.',
  resumePath: '/resume.pdf',
  availability: 'closed',
  languages: [
    { name: 'Arabic', level: 'Native', fluency: 5 },
    { name: 'English', level: 'Fluent', fluency: 5 },
    { name: 'German', level: 'Fluent (B1)', fluency: 4 },
    { name: 'Turkish', level: 'Fluent', fluency: 3 },
    { name: 'Japanese', level: 'Intermediate (B1)', fluency: 3 },
  ],
  timeline: [
    {
      company: 'Freelance',
      role: 'Full-Stack Developer & AI Data Analyst',
      start: '2025',
      end: 'present',
      summary:
        'Full-stack applications with React, Node, TypeScript. AI-powered ' +
        'features and predictive analytics modules. WCAG-compliant UIs.',
    },
    {
      company: 'Elif Inshaat Real Estate',
      role: 'Sales Manager — German & English Departments',
      start: '2022',
      end: '2024',
      summary:
        'Exceeded targets by 15%, grew German-market revenue by 25%. ' +
        'Optimized lead follow-up rates by 35% and cut sales cycle by 20%.',
    },
    {
      company: 'Arena Finance',
      role: 'Conversion & Retention Specialist',
      start: '2020',
      end: '2021',
      summary:
        '200+ qualified leads monthly. 85% client retention. 30% user growth ' +
        'through A/B testing frameworks.',
    },
    {
      company: 'L-QIF Limited Qualified Investor Fund',
      role: 'Conversion Agent',
      start: '2018',
      end: '2019',
      summary:
        'Converted 50–75 qualified investor leads monthly through ' +
        'profile segmentation and targeted outreach.',
    },
    {
      company: 'BCG — Boston Consulting Group',
      role: 'Data Analyst (Project-Based)',
      start: 'Project',
      end: 'Project',
      summary:
        'Statistical modeling and predictive analytics for consulting ' +
        'engagements. Automated Python pipelines for data cleaning and ' +
        'executive dashboards.',
    },
    {
      company: 'CBRE',
      role: 'Data Analyst (Project-Based)',
      start: 'Project',
      end: 'Project',
      summary:
        'Real estate analytics — retail rent, occupancy trends, revenue ' +
        'optimization. Automated reporting systems and market intelligence.',
    },
    {
      company: 'Skyscanner',
      role: 'Data Analyst (Project-Based)',
      start: 'Project',
      end: 'Project',
      summary:
        'Travel market intelligence. ML and feature engineering for pricing ' +
        'and seasonal demand forecasting. Interactive visualizations.',
    },
  ],
};