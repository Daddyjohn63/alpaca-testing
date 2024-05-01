'use client'
import DOMPurify from 'dompurify';

export function DangerousHtmlComponent({ htmlContent }: {htmlContent: string}) {
  const cleanHtml = DOMPurify.sanitize(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
}

