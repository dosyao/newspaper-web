import ReactPaginate from "react-paginate";
import useDisplay from "../../../hooks/useDisplay";

const PaginationComponent = ({ totalPages, page, onClick, hrefBuilder }) => {
    const { lg } = useDisplay();

    return (
        <div className="mb-5 mt-auto lg:mb-10 flex justify-center">
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                previousLabel="Prev"
                onPageChange={onClick}
                initialPage={page - 1}
                pageCount={10}
                marginPagesDisplayed={lg ? 3 : 1}
                hrefBuilder={hrefBuilder}
                className="flex space-x-3 lg:space-x-8 items-center mx-auto"
                pageLinkClassName="rounded-full flex items-center justify-center text-sm lg:text-base w-10 h-10 lg:w-12 lg:h-12"
                activeLinkClassName="bg-black text-white rounded-full text-sm lg:text-base"
                disabledLinkClassName="text-gray-500 cursor-default text-sm lg:text-base"
            />
        </div>
    );
}

export default PaginationComponent;
