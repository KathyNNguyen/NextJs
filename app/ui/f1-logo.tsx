import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { zen_dots } from '@/app/ui/fonts';

export default function F1Logo() {
  return (
    <div
      className={`${zen_dots.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">F1</p>
    </div>
  );
}
