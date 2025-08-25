import {useContext} from 'react'
import myContext from './Context';

function E() {
  let data = useContext(myContext);
  return (
    <div>
       <h2>E Comopnent : {data}</h2>
    </div>
  )
}

export default E