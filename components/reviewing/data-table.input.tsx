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

export const fetchUsers = async ({
  pageIndex,
  pageSize,
}: {
  pageIndex: number
  pageSize: number
}) => {
  pageIndex *= 10
  const response = await fetch(
    `https://dummyjson.com/users?limit=${pageSize}&skip=${pageIndex}`
  ).then((r) => r.json())
  return response.users
}
