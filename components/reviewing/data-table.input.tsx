import { PagedResponse } from "@/components/reviewing/data-table"

export type User = {
  id: number
  firstName: string
  age: number
  email: string
}

type UserResponse = {
  limit: number
  skip: number
  total: number
  users: User[]
}

export async function fetchUsers({
  pageIndex,
  pageSize,
}: {
  pageIndex: number
  pageSize: number
}): Promise<PagedResponse<[]>> {
  pageIndex *= 10
  const response = await fetch(
    `https://dummyjson.com/users?limit=${pageSize}&skip=${pageIndex}`
  ).then((r) => r.json())
  return { cacheKey: "", currentPage: 0, pageSize: 0, results: response.users }
}
