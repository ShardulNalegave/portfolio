
import { ReactNode, Suspense } from 'react';
import Page from '../components/page';

export function PostView({ children } : {
  children: ReactNode,
}) {
  return (
    <Page>
      <Suspense fallback={<>Loading...</>}>
        {children}
      </Suspense>
    </Page>
  );
}