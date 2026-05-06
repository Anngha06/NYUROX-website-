import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import NeuralBackground from '@/components/NeuralBackground';

export const metadata: Metadata = {
  title: 'NYUROX™ – Physics-Based Neuro-Diagnostics',
  description: 'NYUROX™ is a physics-first neuro-diagnostic system focused on detecting functional instability before structural damage appears.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NeuralBackground />
        <Navbar />
        <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}