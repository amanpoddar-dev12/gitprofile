// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'amanpoddar-dev12', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'The-Wild-Oasis',
          description:
            'A robust and user-friendly administrative platform for managing bookings and cabins efficiently.',
          imageUrl:
            'https://img.freepik.com/free-vector/friendly-smiling-woman-administrator-receptionist-reception-desk-giving-key-from-hotel-room-man-guest-with-luggage-bag-hall-lobby-interior_575670-698.jpg?t=st=1736782776~exp=1736786376~hmac=05d13b322a2bda496b03582ab98a1ae55c03855b52c3a43ee1c5b6d594af89a9&w=1060',
          link: 'https://wild-oasisss.netlify.app/',
        },
        {
          title: 'Zestify',
          description:
            'A dynamic shopping platform built using React showcasing modern web development',
          imageUrl:
            'https://img.freepik.com/free-vector/people-shopping-cart-concept-illustration_114360-24964.jpg?t=st=1736782914~exp=1736786514~hmac=4105286cbbaa5af50708ce5debcb7ceb95b044ff98943311d6b927316ef90971&w=740',
          link: 'https://e-commerce-amanpoddar-dev.vercel.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Aman raj',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'amanpoddar12',
    twitter: 'AmanPoddarr',
    // mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    phone: '',
    email: 'amanpoddar775@gmail.com',
  },
  resume: {
    fileUrl:
      'https://app.enhancv.com/share/cb3c6be2/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Html5',
    'Css',
    'JavaScript',
    'React.js',
    'Rest Api',
    'Node.js',
    'Styled Component',
    'MySQL',
    'Github',
    'Git',
    'Npm',
    'CSS',
    'Tailwind',

  ],
  experiences: [
    {
      company: 'Dev Display',
      position: 'Frontend developer',
      from: 'September 2025',
      to: 'Present',
      companyLink: 'https://www.devdisplay.org/',
    },
    {
      company: 'Google Developer Group Patna',
      position: 'Campus Ambesdor',
      from: 'January 2025',
      to: 'Februray 2021',
      companyLink: 'https://gdg.community.dev/gdg-patna/',
    },
  ],
  certifications: [
    {
      name: 'The Complete 2024 Web Development Bootcamp',
      body: 'Udemy',
      year: 'October 2024',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-0313775a-a03f-4e09-aec1-5e6133f79fda.jpg',
    },
    {
      name: 'The Ultimate React Course',
      body: 'Udemy',
      year: 'February 2025',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-da7cd052-9b40-46b4-a642-80748de08214.jpg',
    },
  ],
  educations: [
    {
      institution: 'Cimage Professional College',
      degree: 'BACHELOR OF COMPUTER APPLICATION',
      from: '2022',
      to: '2025',
    }  
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/amanpoddar-dev12/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
