export default function Container() {

  const data = [
    {
      id:1,
      name:"Marie"
    },
    {
      id:2,
      name:"Paul"
    },
    {
      id:3,
      name:"Luuise"
    }
  ]
  
  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {data.map((user, index) => (
          <li key={user.id}>{user.name}</li>
        ))}

        {/* {[
          <li>{data[0].name}</li>,
          <li>{data[1].name}</li>,
          <li>{data[2].name}</li>
          ]} */}
        
      </ul>
    </div>
  )
}