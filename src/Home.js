import React from 'react';
import { Github, Mail, MapPin, Phone } from 'lucide-react';

const Home = () => (
  <div className='min-h-screen bg-gray-900 text-gray-300 p-4'>
    <header className='flex justify-between items-center py-4 px-8'>
      <div className='text-3xl font-bold text-gradient bg-gradient-to-r from-yellow-400 to-gray-500 bg-clip-text text-transparent'>SS</div>
      <nav className='space-x-4'>
        <a href='#about' className='hover:text-yellow-400'>Hakkımda</a>
        <a href='#projects' className='hover:text-yellow-400'>Projeler</a>
        <a href='#contact' className='hover:text-yellow-400'>İletişim</a>
      </nav>
    </header>

    <section className='text-center mt-20'>
      <h1 className='text-6xl font-thin'>Welcome.</h1>
      <p className='text-xl mt-4 max-w-2xl mx-auto'>Marmara Üniversitesi İşletme bölümü mezunu, 5+ yıl frontend geliştirme deneyimine sahibim. React ve modern web teknolojileriyle inovatif projeler üretmeye devam ediyorum.</p>
    </section>

    <section id='projects' className='mt-20'>
      <h2 className='text-4xl font-semibold mb-4 text-center'>Projects</h2>
      <div className='flex flex-col items-center'>
      </div>
    </section>

    <footer className='mt-20 text-center text-gray-600'>
      <p>©2024 Sinan Sendinç</p>
    </footer>
  </div>
);

export default Home;
