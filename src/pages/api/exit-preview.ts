import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();
  // clear git-preview cookie if present
  res.setHeader('Set-Cookie', `git-preview=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`);
  res.writeHead(307, { Location: '/' });
  res.end();
}
