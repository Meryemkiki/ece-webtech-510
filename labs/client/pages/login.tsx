import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    if (username.trim() === '') {
      alert('Le nom d\'utilisateur est requis.');
      return;
    }
    
    if (password === 'motDePasseCorrect') {
      setUserProfile({ username });
      router.push('/accueil');
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
    if (username === 'utilisateur' && password === 'motDePasseCorrect') {
      setUserProfile({ username });
      router.push({
        pathname: '/account',
        query: { userProfile: JSON.stringify(userProfile) }
    

  };

  return (
    <div>
      <h1>Page de connexion</h1>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}
