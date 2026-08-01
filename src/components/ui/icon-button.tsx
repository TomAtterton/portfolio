import { Button } from '@/components/ui/button';
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

interface Props {
  icon: 'github' | 'linkedin' | 'twitter' | 'email';
  link: string;
  className?: string;
  disabled?: boolean;
}

const Icons = {
  home: HomeIcon,
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  twitter: TwitterLogoIcon,
  email: EnvelopeClosedIcon,
};

const labels = {
  github: 'GitHub profile',
  linkedin: 'LinkedIn profile',
  twitter: 'X profile',
  email: 'Email Tom Atterton',
};

const IconButton = ({ icon, link, className, disabled }: Props) => {
  const Icon = Icons[icon];
  const isEmail = link.startsWith('mailto:');

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('h-11 w-11', className)}
      disabled={disabled}
      asChild
    >
      <a
        href={link}
        aria-label={labels[icon]}
        target={isEmail ? undefined : '_blank'}
        rel={isEmail ? undefined : 'noreferrer'}
      >
        <Icon aria-hidden="true" height={24} width={24} />
      </a>
    </Button>
  );
};

export default IconButton;
