import { FC } from 'react';
import { Button } from '@/components/ui/button.tsx';
import { NavLink } from 'react-router-dom';

const SignInPage: FC = () => {

  return (
    <div className="flex flex-col gap-4 h-full justify-center p-8 bg-background">
      <h1 className="text-2xl">
        Some header
      </h1>

      <Button asChild>
        <NavLink to="/auth/sign-up">
          Don't have an account?
        </NavLink>
      </Button>
    </div>

  )
};

export default SignInPage;

