import NextImage from "next/image";

const Image = (props) => (
    <div className="relative max-w-[632] w-full rounded-xl">
        <NextImage
            className="rounded-xl"
            alt={props.alt}
            layout="responsive"
            width={632}
            height={356}
            {...props}
            />
    </div>
);

export default Image;
