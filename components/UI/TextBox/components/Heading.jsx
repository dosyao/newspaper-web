const Heading = ({ jsxTag, ...props }) => {
    switch (jsxTag) {
        case 'h1':
            return <h1 {...props} className="mt-0 mb-5 text-xl font-semibold lg:text-2xl lg:font-black lg:mb-7" />;
        case 'h2':
            return <h2 {...props} className="mt-0 mb-2 text-lg font-semibold lg:text-xl lg:font-black lg:mb-5" />;
        case 'h3':
            return <h3 {...props} className="mt-0 mb-2 text-base font-semibold lg:text-lg lg:font-black lg:mb-5" />;
        default:
            return null;
    }
};

export default Heading;
