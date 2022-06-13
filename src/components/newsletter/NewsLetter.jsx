import "./newsLetter.css"

const NewsLetter = () => {
    return (
        <div className="newsLetter">
          <h1 className="newsLetterTitle">Save time, save money!</h1>
          <span className="newsLetterDesc">Sign up and we'll send the best deals to you</span>
          <div className="newsLetterInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      )
}

export default NewsLetter