interface IGreentingProps {
  name: string
}

export const Greeting = ({ name }: IGreentingProps) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  )
}
