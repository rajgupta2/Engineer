import '@Styles/global.css';
import HomeLayout from '@components/homeLayout';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

export default function App({ Component, pageProps }) { 
    return (
      <>
      <HomeLayout>
         <Component className="mt-64" {...pageProps} />
      </HomeLayout>
      </>
    );
  }