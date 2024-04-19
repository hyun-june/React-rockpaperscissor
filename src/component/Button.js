import React from 'react'

const Button = ({play}) => {
  return (
    <div>
      <button onClick={()=>play("scissors")}><img src="https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png" className="button-img" /></button>
      <button onClick={()=>play("rock")}><img src="https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png" className="button-img" /></button>
      <button onClick={()=>play("paper")}><img src="https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png" className="button-img" /></button>
    </div>
  )
}

export default Button