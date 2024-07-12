import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "../../../components/ui/pagination"
  
  export function PaginationDemo() {
    return (
      <div className="bg-white p-4 w-full">
        <Pagination>
          <PaginationContent className="flex justify-between md:w-full">
            <PaginationItem className="">
              <PaginationPrevious href="#" className="hover:bg-transparent" />
            </PaginationItem>
            <div className="flex">
              <PaginationItem className="">
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </div>
            <PaginationItem>
              <PaginationNext href="#" className="hover:bg-transparent" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  }
  