import { useState, useEffect } from 'react'

export default function Random() {

    const [state, setState] = useState(false)

    useEffect(() => {
        newWord()
    }, [])

    const newWord = () => {
   
        fetch('api/vocapi')
        .then((res) => res.json())
        .then(data => 
        setState(data)
        )
        
    }
  
    let randomWord;
    

        if (state) {
            const array =state.vocabulary
   
            let randomIndex = Math.floor(Math.random() * array.length);
            console.log(randomIndex,'ici');
            randomWord = array[randomIndex].en;
            console.log(randomWord,'la');
        }


  return (
    <div classnName='container '>
        <h1 className='text-center'>Votre mot au hasard</h1>
    <button  onClick ={newWord} className='btn btn-primary d-block m-auto'> Let's go </button>
    <h2 className='text-center mt-4'>{randomWord}</h2>
        </div>
  )
}
