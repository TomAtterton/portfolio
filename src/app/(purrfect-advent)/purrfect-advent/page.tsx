import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Route } from 'next';

const privacyPolicyUrl = '/privacy-policy' as Route;
const supportUrl = '/support' as Route;

const LandingPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <Image
          src="/christmas_background.webp"
          alt="Festive Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70 filter blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-2xl">
        <Image
          src="/puurfect_advent_icon.png"
          alt="Purr-fect Holiday Countdown Icon"
          width={120}
          height={120}
          className="mx-auto"
        />

        <h1 className="mt-8 text-5xl font-bold text-foreground">Purr-fect Holiday Countdown</h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Make an advent calendar for someone you love, and share it to their iPhone. Fill 24 doors
          with notes, photos, GIFs and stickers, and they open one each day of December.
        </p>

        <p className="mt-4 text-xl italic text-muted-foreground">
          Now available on the App Store! 🎄
        </p>

        <div className="mt-8">
          <a
            href="https://apps.apple.com/us/app/purrfect-advent/id6473840052"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/download_apple_white.svg"
              alt="Download on the App Store"
              width={160}
              height={54}
              className="mx-auto"
            />
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <Link href={supportUrl}>
            <span className="text-sm text-muted-foreground underline">Support</span>
          </Link>
          <Link href={privacyPolicyUrl}>
            <span className="text-sm text-muted-foreground underline">Privacy Policy</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
