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
        <PaginationContent className="flex justify-between gap-8 w-full">
          <PaginationItem>
            <PaginationPrevious href="#" className="hover:bg-none" />
          </PaginationItem>
          <div className="flex gap-4">
          <PaginationItem className="">
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          </div>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
     </div>
    )
  }
  