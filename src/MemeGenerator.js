import {useState} from 'react'
import MemesData from './MemesData';

const MemeGenerator = () => {
  

    //const [memeImage,setMemeImage] = useState("");

    const [meme,setMeme] = useState({
        topText :'',
        bottomText :'',
        randomImage :'http://i.imgflip.com/1bij.jpg',
    })
    
    const [allMemeImages,setAllMemeImages] = useState(MemesData)

    // const [isShown , setIsShown] = useState(false)


    function updateInputs(e)
    {
       const {name,value} = e.target;
       setMeme(prev =>
        ({
            ...prev,
            [name] : value
        })
        )

    }


    const handleClick = (e) =>
    {   e.preventDefault();
        const arr = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random()* arr.length);
        const url = arr[randomNumber].url;
        setMeme((prev)=>({
            randomImage: url,
            topText :'',
            bottomText :''
        }))
        // setIsShown(true)
        // console.log(isShown)
        
    }

    return (
        <div>
        <header className="header">
            <h2 className="header-title"><i className="fa-solid fa-meteor"></i>Meme Generator</h2>
            <h4 className="header-project">By: Akshay Malik</h4>
        </header>
        <main>
            <form className="form" onSubmit={handleClick}>
            <input className="form-input" 
            type="text"
             placeholder="Top Text"
             name="topText"
             value={meme.topText}
             onChange={updateInputs}
             />
            <input className="form-input" type="text"  
             placeholder="bottom Text"
             name="bottomText"
             value={meme.bottomText}
             onChange={updateInputs}
              />

            <button className="btn-meme">Generate a new Meme </button>
        
            </form>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
           <br />
           <h3 className='ss-tag' style={{textAlign : 'center'}}>Take Screenshot once edited</h3>
           
            
        </main>
        </div>
      );
}
 
export default MemeGenerator;