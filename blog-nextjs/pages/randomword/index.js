import { useState, useEffect } from 'react'

export default function random() {

    const [state, setState] = useState(false)

    useEffect(() => {
        newWord()
    }, [])

    const newWord = () => {
        fetch('api/vocapi')
        .then((res) => res.json())
        .then((data) => 
            setState(data)
        )

        let randomWord;
        console.log(randomWord);
        if (state) {
            const array =state.vocabulary[0]
            randomword = array[Math.floor(Math.random() * array.length).en];
            console.log(randomWord);
        }
    }
  return (
    <div classname='container '>
        <h1>Votre mot au hasard</h1>
    <button  onclick ={newWord} className='btn btn-primary'> Let's go </button>
    {/* <div>{state}</div> */}
        </div>
  )
}
