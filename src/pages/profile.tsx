import { ProfilePage } from "../../page_components/ProfilePage/ProfilePage";
import Head from 'next/head';
import { useRouter } from "next/router";
import { setLocale } from "../../helpers/locale.helper";


function Main(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).profile}</title>
        <meta name='description' content={setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).profile} />
        <meta property='og:title' content={setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).profile} />
        <meta property='og:description' content={setLocale(router.locale).legaldoc + ' - ' + setLocale(router.locale).profile} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <ProfilePage />
    </>
  );
}

export default Main;
