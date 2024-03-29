import { Project } from './types';

const projects: Array<Project> = [
  {
    id: 0,
    name: 'Interactive card details form',
    imagePath: '/public/interactive_card_details_form.png',
    stack: ['typescript', 'react'],
    about:
      'This is a solution to the Interactive card details form challenge on Frontend Mentor. I created this project to learn more about web design and practise in newly learn typescript.',
    url: 'https://github.com/redkorr/interactive-card-details-form'
  },
  {
    id: 1,
    name: 'Github profile app',
    imagePath: '/public/github_profile_app.png',
    stack: ['react', 'javascript', 'graphql'],
    about:
      'I created this project to learn React and how to communicate with API. At first for this project I worked with Github REST API but after a few problem with it a decided to migrate to GitHub GraphQL API. ',
    url: 'https://github.com/redkorr/github-profile-app'
  },
  {
    id: 2,
    name: 'Notifications page',
    imagePath: '/public/notifications-page-desktop.png',
    stack: ['typescript', 'tailwind', 'react', 'moment.js'],
    about:
      'This is a solution to the Interactive card details form challenge on Frontend Mentor. I created this project to learn more about web design and practise more in typescript. To expand knowledge about styling I used Tailwind. To efficiently handle date and time operations I used Moment.js library.',
    url: 'https://github.com/redkorr/notifications-page-main'
  }
];

export default projects;
