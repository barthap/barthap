import React from 'react';
import { IoMailOutline } from 'react-icons/io5';

type ProfileLink = {
  href: string;
  iconComponent: React.ReactElement;
};

interface Props {
  fullName: string;
  caption: string;
  email: string;
  profileImageUrl: React.ImgHTMLAttributes<HTMLImageElement>['src'];
  profileLinks: ProfileLink[];
}

const ProfileSection: React.FC<Props> = ({
  fullName,
  caption,
  email,
  profileImageUrl,
  profileLinks,
}) => (
  <section className="profileSection">
    <div className="profileContainer">
      <div className="profilePhoto">
        <img src={profileImageUrl} alt={`${fullName} profile photo`} />
      </div>
      <div className="fullName">{fullName}</div>
      <div className="profileCaption">{caption}</div>
      <div className="mediaLinks">
        {profileLinks.map(({ iconComponent, href }, index) => (
          <a target="blank" href={href} key={index}>
            <span className="circle">
              {React.cloneElement(iconComponent, {
                className: [iconComponent.props.className, 'icon'].join(' '),
              })}
            </span>
          </a>
        ))}
      </div>
      <div className="email">
        <a href={`mailto:${email}`}>
          <IoMailOutline className="icon" />
          {email}
        </a>
      </div>
    </div>
  </section>
);

export default ProfileSection;
