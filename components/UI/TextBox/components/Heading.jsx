const Heading = ({ jsxTag, ...props }) => {
    const id = props.children.trim().toLowerCase().replace(/ /gi, "-");

    switch (jsxTag) {
        case 'h1':
            return <h1 {...props} id={id} className="mt-0 mb-5 text-xl font-black lg:text-2xl lg:mb-7" />;
        case 'h2':
            return <h2 {...props} id={id} className="mt-0 mb-2 text-lg font-black lg:text-xl lg:mb-5" />;
        case 'h3':
            return <h3 {...props} id={id} className="mt-0 mb-2 text-base font-black lg:text-lg lg:mb-5" />;
        default:
            return null;
    }
};

export default Heading;
