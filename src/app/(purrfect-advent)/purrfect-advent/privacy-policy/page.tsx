import { Metadata } from 'next';
import { renderMarkdownFile } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of Purrfect Advent',
};

const PrivacyPolicyPage = async () => {
  const contentHtml = await renderMarkdownFile('public/purrfect-advent/privacy-policy.md');
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
