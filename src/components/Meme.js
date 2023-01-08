import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function generateNewMeme() {
    let memeNumber = Math.floor(Math.random() * 100);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[memeNumber].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <main className="meme-container">
      <div className="upper-section">
        <input
          className="input1"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="input2"
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={generateNewMeme}>Get a new meme image 🖼</button>
      </div>
      <div className="image-container">
        <img src={meme.randomImage} alt="meme" className="meme-image" />
        <h2 className="meme-text-top">{meme.topText}</h2>
        <h2 className="meme-text-bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
