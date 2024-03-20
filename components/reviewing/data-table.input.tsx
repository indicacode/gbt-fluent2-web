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

export async function fetchUsers(
  itemsByRequest: number,
  itemsBehind: number
): Promise<Array<User>> {
  itemsBehind *= 10
  const response = await fetch(
    `https://dummyjson.com/users?limit=${itemsByRequest}&skip=${itemsBehind}`
  )

  const userResponse = (await response.json()) as UserResponse
  return userResponse.users
}
