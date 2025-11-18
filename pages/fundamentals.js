import Head from 'next/head';

export default function Fundamentals() {
  return (
    <>
      <Head>
        <title>HTML Fundamentals - HTML Cheat Sheet</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div>
        <h1>Fundamentals Page</h1>
        <p>This is the fundamentals page converted to Next.js</p>
        <nav>
          <a href="/">Home</a> | 
          <a href="/fundamentals">Fundamentals</a> | 
          <a href="/tags-reference">Tags Reference</a> | 
          <a href="/examples">Examples</a> | 
          <a href="/resources">Resources</a>
        </nav>
      </div>
    </>
  );
}