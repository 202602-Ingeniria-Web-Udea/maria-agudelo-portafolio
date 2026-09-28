import LeftMenu from '@/components/organisms/left-menu/Index';
import RightMenu from '@/components/organisms/right-menu/Index';
import MainContent from '@/components/organisms/main-content/Index';

export default function Home() {
  return (
    <div className='flex h-screen w-full overflow-hidden gap-5'>
      <div className='shrink-0 bg-white shadow-sm overflow-y-auto'>
        <LeftMenu />
      </div>
      <div className='flex-1 h-full overflow-y-auto p-6'>
        <MainContent />
      </div>
      <div className='shrink-0 bg-white shadow-sm flex flex-col items-center py-6'>
        <RightMenu />
      </div>
    </div>
  );
}
