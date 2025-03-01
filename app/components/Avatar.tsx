'use client';

import Image from "next/image";

interface AvatarProps {
    src?: String
}

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return (
        <Image
            className="rounded-full"
            height="30"
            width="30"
            alt="avatar"
            src={src as string || '/images/placeholder.jpg'}
        />
    )
}

export default Avatar;