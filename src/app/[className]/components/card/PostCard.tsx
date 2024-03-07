import Image from 'next/image';
import {PostCardProps} from '@/src/interfaces/group';
import icons from '@/public/svgs/group';

const PostCard = ({ImageSrc, PostName, managerRole}: PostCardProps) => {
  return (
    <div className="border rounded-lg min-w-52 max-w-72 h-44 border-gray-300 mr-10 mb-10 hover:shadow-md active:bg-neutral-50 focus:ring focus:ring-gray-400 transform hover:scale-105 transition duration-200 ease-in-out">
      <div className="flex justify-center items-center mt-2">
        <div className="mt-2 w-72 h-24 relative overflow-hidden">
          <Image
            src={ImageSrc}
            alt={'Thumbnail'}
            fill={true}
            sizes="(max-width: 200px), (max-hight:78px)"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex ms-4 mt-4">
        <Image
          className="me-2"
          src={icons.post}
          alt={'post'}
          width={20}
          height={20}
        />
        <div className="flex w-full justify-between">
          <h3 className="font-bold text-lg">{PostName}</h3>
          {managerRole && (
            <Image
              src={icons.moreVert}
              alt={'moreVert'}
              width={30}
              height={30}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
