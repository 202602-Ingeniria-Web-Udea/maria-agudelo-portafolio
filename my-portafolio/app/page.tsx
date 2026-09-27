import LeftMenu from '@/components/organisms/left-menu/Index';
import RightMenu from '@/components/organisms/right-menu/Index';

export default function Home() {
  return (
    <div className='flex flex-row justify-between'>
      <LeftMenu />
      <RightMenu />
    </div>
  );
}
