import LeftMenu from '@/components/organisms/left-menu/Index';
import RightMenu from '@/components/organisms/right-menu/Index';
import MainContent from '@/components/organisms/main-content/Index';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col gap-5 overflow-x-hidden lg:h-screen lg:flex-row'>
      <div className='order-2 w-full shrink-0 bg-white shadow-sm lg:order-1 lg:w-76.25 lg:overflow-y-auto'>
        <LeftMenu />
      </div>
      <div className='order-1 min-w-0 flex-1 p-4 lg:order-2 lg:h-full lg:overflow-y-auto lg:p-6'>
        <MainContent />
      </div>
      <div className='order-3 flex w-full shrink-0 flex-row items-center justify-center bg-white py-6 shadow-sm lg:w-24 lg:flex-col'>
        <RightMenu />
      </div>
    </div>
  );
}
