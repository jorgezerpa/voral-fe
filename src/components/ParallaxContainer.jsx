import React from 'react'

const ParallaxContainer = ({ backgroundImage, children }) => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundAttachment: 'fixed', backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        { children }
    </div>
  )
}

export default ParallaxContainer