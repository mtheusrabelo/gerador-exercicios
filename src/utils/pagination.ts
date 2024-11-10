export type Pagination = {
  current: number;
  pageSize: number;
};

export type DatabasePagination = {
  offset: number;
  limit: number;
};

export const mountDatabasePagination = (
  pagination?: Pagination,
): DatabasePagination => {
  const current = pagination?.current || 1;
  const pageSize = pagination?.pageSize || 25;

  return {
    offset: (current - 1) * pageSize,
    limit: pageSize,
  };
};
