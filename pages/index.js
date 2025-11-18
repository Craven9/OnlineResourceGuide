import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [inputName, setInputName] = useState('');

  useEffect(() => {
    // Get name from URL parameter (?name=John)
    const { name } = router.query;
    if (name) {
      setUserName(name);
      setShowWelcome(true);
    }
  }, [router.query]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      router.push(`/?name=${encodeURIComponent(inputName.trim())}`);
    }
  };

  return (
    <div>
      <head>
        <title>HTML Cheat Sheet</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      
      {showWelcome && (
        <div style={{
          background: 'linear-gradient(135deg, #7c9885, #8db4d3)',
          color: 'white',
          padding: '1rem 2rem',
          textAlign: 'center',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          🎉 Welcome, {userName}! Great to see you learning HTML! 🎉
        </div>
      )}

      {!showWelcome && (
        <div style={{
          background: '#f8f9fa',
          border: '2px solid #7c9885',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#7c9885', marginTop: 0 }}>👋 What's your name?</h3>
          <form onSubmit={handleNameSubmit} style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Enter your name..."
              style={{
                padding: '8px 12px',
                border: '2px solid #7c9885',
                borderRadius: '4px',
                fontSize: '16px',
                minWidth: '200px'
              }}
            />
            <button type="submit" style={{
              background: '#7c9885',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              Let's Go!
            </button>
          </form>
        </div>
      )}
      
      <h1>HTML Cheat Sheet</h1>
      <p>Your complete reference guide for HTML tags, syntax, and best practices.</p>
      <nav>
        <a href="/">Home</a> | 
        <a href="/fundamentals">Fundamentals</a> | 
        <a href="/tags-reference">Tags Reference</a> | 
        <a href="/examples">Examples</a> | 
        <a href="/resources">Resources</a>
      </nav>
      <p>Welcome to the HTML Cheat Sheet. This is now a Next.js application.</p>
    </div>
  );
}