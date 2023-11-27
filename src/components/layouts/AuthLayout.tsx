import { FC } from 'react';
import background from '../../../public/auth-background.avif';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
  return (
    <main className="flex overflow-hidden h-screen">
      <figure className="hidden lg:flex flex-col flex-1">
        <img className="object-cover h-full" src={background} alt="background"/>
      </figure>

      <section className="flex-1 overflow-y-auto">
        <Outlet/>
      </section>
    </main>
  )
};

export default AuthLayout;
