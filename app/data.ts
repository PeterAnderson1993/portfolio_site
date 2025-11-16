type Project = {
  name: string
  description: string
  link: string
  img: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Draft Web App',
    description:
      'Real-time draft tracker using the official Premier League Fantasy API to compare head-to-head scores and calculate points live. Built with JavaScript for dynamic updates and seamless API integration.',
    link: 'https://peterjamesanderson.co.uk/premDraftApp/main_v2.3.html',
    img: '/horizontal_logo_white_cropped.png',
    id: 'project1',
  },
  {
    name: 'Calculator',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://peterjamesanderson.co.uk/projects/calculator/Default.html',
    img:
      '/calc_img.png',
    id: 'project2',
  },
  {
    name: 'Portfolio Site',
    description: "This site that you're looking at right now. I took an open source next.js template and personalised it.",
    link: '',
    img:
      '/portfolio_img.png',
    id: 'project3',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/PeterAnderson1993',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/peteranderson1993/',
  }
]

export const EMAIL = 'panderson900@gmail.com'
