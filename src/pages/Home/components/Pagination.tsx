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
     <div className="bg-white py-4 w-full">
       <Pagination>
        <PaginationContent>
          <PaginationItem className="">
            <PaginationPrevious href="#" />
          </PaginationItem>
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
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
     </div>
    )
  }
  