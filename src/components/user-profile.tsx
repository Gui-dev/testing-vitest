import { useEffect, useState } from 'react'

interface IUserProps {
  userId: number
  name: string
  email: string
}

interface IUserProfileProps {
  userId: number
}

export const UserProfile = ({ userId }: IUserProfileProps) => {
  const [user, setUser] = useState<IUserProps | null>(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
  }, [userId])

  if (!user) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
