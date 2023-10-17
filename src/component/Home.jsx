import { useDispatch } from "react-redux"
import { Increment } from "../redux/type"

const Home = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={Increment}>Increase</button>
        <button>Decrees</button>
    </div>
  )
}

export default Home