import React from 'react';
import * as icon from 'react-icons/io5';

import profilePhoto from '../assets/images/profilePhoto.jpg';
import { Content, Layout } from '../components/layout';
import ProfileSection from '../components/sections/profile';
import SEO from '../components/seo';

const profileInfo = {
  fullName: 'Bartłomiej Klocek',
  caption: 'Software Developer',
  email: 'bartlomiej.klocek@swmansion.com',
  profileImageUrl: profilePhoto,
  profileLinks: [
    {
      href: 'https://github.com/barthap',
      iconComponent: <icon.IoLogoGithub title="GitHub" />,
    },
    {
      href: 'https://www.linkedin.com/in/bartlomiej-klocek/',
      iconComponent: <icon.IoLogoLinkedin title="LinkedIn" />,
    },
    {
      href: 'https://bartlomiej-klocek.medium.com',
      iconComponent: <icon.IoLogoMedium title="Medium" />,
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      <SEO title="About me" />
      <ProfileSection {...profileInfo} />
      <Content />
    </Layout>
  );
}
