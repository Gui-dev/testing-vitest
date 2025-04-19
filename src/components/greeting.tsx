interface IGreentingProps {
  name?: string
}

export const Greeting = ({ name = 'Batman' }: IGreentingProps) => {
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  )
}
