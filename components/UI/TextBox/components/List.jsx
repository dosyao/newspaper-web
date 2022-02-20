const List = ({ jsxTag, ...props }) => {
    switch (jsxTag) {
        case 'ul':
            return <ul {...props} className="p-0 pb-5 space-y-1 list-disc pl-5" />;
        case 'ol':
            return <ol {...props} className="p-0 pb-5 space-y-1 list-decimal pl-5" />;
        case 'li':
            return <li {...props} className="text-sm lg:text-base" />;
        default:
            return null;
    }
};

export default List;
