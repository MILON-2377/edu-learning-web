// src/components/withAuth.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase';

const withAuth = (WrappedComponent) => {
  return (props) => { 
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.push('/login');
        } else {
          setUser(user);
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withAuth;
