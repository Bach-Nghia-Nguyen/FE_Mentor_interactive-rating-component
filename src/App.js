import React, { useState } from 'react'
import star from 'assets/images/icon-star.svg'
import thankYou from 'assets/images/illustration-thank-you.svg'
import './App.css'

const rates = [1, 2, 3, 4, 5]

function App() {
  const [selectedRate, setSelectedRate] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChooseRate = (value) => {
    setSelectedRate((prev) => (prev === value ? null : value))
  }

  return (
    <div className="app-container">
      {!submitted ? (
        <>
          <div className="star-wrapper">
            <img src={star} alt="star" className="star" />
          </div>
          <h2 className="heading">How did we do?</h2>
          <p className="indication">
            Please let us know how we did with your support request. All feedback is appreciated to
            help us import our offering!
          </p>
          <div className="rate-wrapper">
            {rates &&
              rates.map((item) => (
                <div
                  key={item}
                  className={`rate ${selectedRate === item ? 'selected' : ''}`}
                  onClick={() => handleChooseRate(item)}
                >
                  {item}
                </div>
              ))}
          </div>
          <button className="submit-btn" onClick={() => setSubmitted(true)}>
            Submit
          </button>
        </>
      ) : (
        <div className="thank-wrapper">
          <div className="illustration-wrapper">
            <img src={thankYou} alt="Thank You" className="thank-you" />
          </div>
          {selectedRate && (
            <div className="rate-display">
              You selected {selectedRate} out of {rates[rates.length - 1]}
            </div>
          )}
          <h2 className="heading">Thank you!</h2>
          <p className="indication">
            We appreciate you taking the time to give a rating. If you ever need more support, don't
            hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  )
}

export default App
