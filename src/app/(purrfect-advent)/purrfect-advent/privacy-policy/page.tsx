import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { read } from 'to-vfile';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of Purrfect Advent',
};

const getPrivacyPolicyContent = async (): Promise<string> => {
  const markdownFilePath = path.join(
    process.cwd(),
    'public',
    'purrfect-advent',
    'privacy-policy.md',
  );
  const fileContents = fs.readFileSync(markdownFilePath, 'utf8');

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(await read('public/purrfect-advent/privacy-policy.md'));

  return String(processedContent);
};

const PrivacyPolicyPage = async () => {
  const contentHtml = await getPrivacyPolicyContent();
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
