"use client";

import { Pagination } from "flowbite-react";
import React, { useState } from "react";

interface AppPaginationProps {
  currentPage: number;
  pageCount: number;
  totalPages?: number;
  pageChanged: (page: number) => void;
}

export default function AppPagination({
  currentPage,
  pageCount,
  totalPages,
  pageChanged,
}: AppPaginationProps) {
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={(e) => pageChanged(e)}
      totalPages={pageCount}
      layout="pagination"
      showIcons={true}
      className="mb-5"
    />
  );
}
