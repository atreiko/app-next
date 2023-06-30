'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import styles from './index.module.css';

const Login = () => {
  const session = useSession();
  const router = useRouter();

  console.log('LOGIN SESSION: ', session);

  useEffect(() => {
    if (session.status == 'authenticated') {
      router?.push('dashboard');
    }
  }, [session.status]);

  if (session.status == 'loading') {
    return <p>Loading</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', { email, password });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type='email' placeholder='Email' required className={styles.input} />
        <input type='password' placeholder='Password' required className={styles.input} />
        <button className={styles.button}>Login</button>
      </form>

      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  );
};

export default Login;
