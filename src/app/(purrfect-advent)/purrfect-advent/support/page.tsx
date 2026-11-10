import { Metadata } from 'next';
import { renderMarkdownFile } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help and contact for Purrfect Advent',
};

const SupportPage = async () => {
  const contentHtml = await renderMarkdownFile('public/purrfect-advent/support.md');
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
};

export default SupportPage;
