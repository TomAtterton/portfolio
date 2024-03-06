import {Button} from "@/components/ui/button";
import Link from "next/link";
import {EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon} from "@radix-ui/react-icons";
import {cn} from "@/lib/utils";

interface Props {
    icon: 'github' | 'linkedin' | 'twitter' | 'email';
    link: string;
    className?: string;
    disabled?: boolean;

}


const Icons = {
    github: GitHubLogoIcon,
    linkedin: LinkedInLogoIcon,
    twitter: TwitterLogoIcon,
    email: EnvelopeClosedIcon,

}


const IconButton = ({
                        icon,
                        link,
                        className,
                        disabled
                    }: Props) => {

    const Icon = Icons[icon];
    return (
        <Button variant={'ghost'} className={cn("p-6", className)} disabled={disabled} asChild>
            <Link href={link} target="_blank" rel="noreferrer">
                <Icon
                    height={32}
                    width={32}
                />
            </Link>
        </Button>
    );
}

export default IconButton;
