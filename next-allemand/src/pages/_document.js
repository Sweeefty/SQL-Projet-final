import { Head, Html, Main, NextScript } from 'next/document';

import Link from 'next/link';
import LoginBtn from "@/components/login-btn"

export default function Document() {
  return (
    <Html className="flex min-h-full" lang="fr">
      <Head />
      <body className="flex min-h-full flex-1 flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
