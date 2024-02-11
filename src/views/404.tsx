
import Page from '../components/page';

export function NotFoundView() {
  document.title = '404 - Not Found';

  return (
    <Page>
      <div className='h-full w-full items-center flex'>
        <div className="grow"></div>
        <div className="flex-none text-center">
          <h1 className="font-['Staatliches'] text-5xl">404</h1>
          <div className='h-[10px]'></div>
          <h1 className="font-display text-3xl">Page Not Found</h1>
          <div className='h-[15px]'></div>
          <hr />
          <div className='h-[15px]'></div>
          <h1>The URL you requested doesn&apos;t exist.<br />Please try checking it again.</h1>
        </div>
        <div className="grow"></div>
      </div>
    </Page>
  );
}