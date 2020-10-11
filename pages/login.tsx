import { gql, useMutation } from '@apollo/client';
import { Router, useRouter } from 'next/dist/client/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginDocument } from '../generated/graphql';
import Session from '../hooks/session';
// @ts-ignore
const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;
const LoginPage: React.FC = () => {
  const session = useContext(Session);
  const router = useRouter();
  console.log(session);
  const [loginMutation] = useMutation(LoginDocument);
  const { handleSubmit, register, errors } = useForm<{
    username: string;
    password: string;
  }>();
  if (session.isLoggedIn) router.push('/');
  return (
    <div className="flex flex-col bg-black">
      <div className="flex justify-center">
        <form
          className="p-20 bg-gray-600"
          onSubmit={handleSubmit(async ({ username, password }) => {
            const { data } = await loginMutation({
              variables: { username, password },
            });
            session.setIsLoggedIn(data?.login ?? false);
          })}
        >
          <label htmlFor="username">
            <span className="block text-white">Username</span>
            <input
              ref={register({ required: true })}
              className="block"
              type="text"
              name="username"
            />
            {errors.username && (
              <span className="text-red-300">username must be required</span>
            )}
          </label>
          <label htmlFor="password">
            <span className="block text-white">Password</span>
            <input
              ref={register({ required: true })}
              className="block"
              type="password"
              name="password"
            />
            {errors.password && (
              <span className="text-red-300">password must be required</span>
            )}
          </label>
          <button
            className="w-full mt-5 text-white border-2 border-solid rounded-sm"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex-1 min-h-screen bg-black" />
    </div>
  );
};

export default LoginPage;
