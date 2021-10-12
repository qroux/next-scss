import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { motion } from 'framer-motion';

export default function MenuLink({
  label = 'à changer',
  path = '/',
  setClicked,
}) {
  const router = useRouter();

  return (
    <div
      style={{ margin: '2rem 0 ' }}
      onClick={() => {
        setClicked(false);
        setTimeout(() => router.push(path), 500);
      }}>
      <h2 style={{ color: 'white', fontWeight: 400 }}>{label}</h2>
    </div>
  );
}
