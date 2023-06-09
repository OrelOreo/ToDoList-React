
export default function Item(props) {
  return (
    <li className="d-flex border justify-content-between align-items-center p-2 m-2">
        <div className="p-3">{props.txt}</div>
        <button onClick={() => props.delFunc(props.id)} className="btn btn-danger p-2 h-50">Supprimer</button>
    </li>
  )
}
