import React from 'react'
import rsultImage from '../assets/result.jpeg'
function Home() {
  const style={
    image:{
      width:'100%',
      height:'30rem'
      
    }
  }
  return (
    <div>
      <img style={style.image}src={rsultImage} alt="" />
    </div>
  )
}

export default Home;
