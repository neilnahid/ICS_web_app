import { useRouter } from 'next/dist/client/router';

const IndexPage: React.FC = () => {
  if (typeof window !== 'undefined') useRouter().replace('/admin');
  return <></>;
};

export default IndexPage;
