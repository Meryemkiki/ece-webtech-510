// Navbar.js
import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/about">À propos</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/articles/[articleId]">Articles</Link>
        </li>
        {/* Ajoutez d'autres liens de navigation si nécessaire */}
      </ul>
    </nav>
  );
}

export default Navbar;
