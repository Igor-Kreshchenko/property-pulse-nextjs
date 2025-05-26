import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse',
  keywords: 'property, real estate, listings, buy, sell, rent',
  description:
    'Property Pulse - Your go-to platform for real estate listings and insights.',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
