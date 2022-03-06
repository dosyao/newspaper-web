import NextImage from "next/image";

const Image = (props) => (
    <div className="relative max-w-[632] w-full rounded-xl aspect-video">
        <NextImage
            className="rounded-xl"
            alt={props.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            {...props}
            />
    </div>
);

export default Image;
