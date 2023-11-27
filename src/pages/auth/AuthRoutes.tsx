import SignInPage from '@/pages/auth/sign-in/SignInPage.tsx';
import SignUpPage from '@/pages/auth/sign-up/SignUpPage.tsx';
import { Navigate, RouteObject } from 'react-router-dom';

const AuthRoutes: RouteObject[] = [
  { path: 'sign-in', element: <SignInPage/> },
  { path: 'sign-up', element: <SignUpPage/> },
  { path: '*', element: <Navigate to='/auth/sign-in' replace/> },
  { path: '', element: <Navigate to='/auth/sign-in' replace/> }
];

export default AuthRoutes;
