# Pwnspinner - npm package

Simple loading spinner **Pwnspinner** for React.js/TypeScript installable via npm.

## Available options
- Simple usage `import { Pwnspinner } from 'pwnspinner';` and then `<Pwnspinner/>` without options.
- (Preparing voluntary props: `color speed thickness`)

## Usage
```JSX
import React, { useEffect, useState } from 'react';
//Fetches
import FetchList from '../fetches/FetchList';
//Redux/RTK
import { setList } from '../redux-rtk/listSlice';
//Pwnspinner
import { Pwnspinner } from 'pwnspinner'; // <-- (!) import our Pwnspinner

function YourComponent() {
    const dispatch = useDispatch();
    const [spinner, setSpinner] = useState(true); // <-- (!) spinner visibility variable
    //Fetch downloaded list from Redux
    const list = useSelector(state=>state.list.list)
    useEffect(() => {
        const list = FetchList();
        Promise.resolve(list) // <-- (!) wait to fetch/resolve your stuff
            .then((result) => {
                dispatch(setList(result))
                setSpinner(false) // <-- (!) set Pwnspinner to not be visible anymore
            })
            .catch((e: any) => {
                console.log(e)
            })
    })
    return(
        <div>
            { spinner // <-- (!) spinner visibility variable
                ? <Pwnspinner/> // <-- (!) while 1 
                : <Displaylistcomp list={list} />  // <-- (!) after 0
            }
        <div/>
    )
}
```
___

## Future development
We are slowly integrating these props options to modify design of the Pwnspinner:
- color,
- thickness,
- speed. 

