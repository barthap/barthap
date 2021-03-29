import React from 'react';
import * as icon from 'react-icons/io5';

import profilePhoto from '../assets/images/profilePhoto.jpg';
import { Content, Layout } from '../components/layout';
import ProfileSection from '../components/sections/profile';

const profileInfo: U = {
  fullName: 'Bartłomiej Klocek',
  caption: 'Software Developer',
  email: 'bartlomiej.klocek@swmansion.com',
  profileImageUrl: profilePhoto,
  profileLinks: [
    {
      href: 'https://github.com/barthap',
      iconComponent: <icon.IoLogoGithub />,
    },
    {
      href: 'https://www.linkedin.com/in/bartlomiej-klocek/',
      iconComponent: <icon.IoLogoLinkedin />,
    },
    {
      href: 'https://bartlomiej-klocek.medium.com',
      iconComponent: <icon.IoLogoMedium />,
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      <ProfileSection {...profileInfo} />
      <Content />
    </Layout>
  );
}
