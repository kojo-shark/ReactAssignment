import React from'react'
import '../Components/Page.css'


function SampleWall(){
    return(
        <div>
            {/* Sample Wallpaper */}
        <div className="sample-wallpaper">
          {/* Wallpaper #1 */}
          <article className="wallpaper">
            <img src={require("../assets/img/venom-1.jpg")} alt="Wallpaper #1" className="wallpaper" />
          </article>

          {/* Wallpaper #2 */}
          <article className="wallpaper">
            <img src={require('../assets/img/hulk-1.jpg')}className="wallpaper" />
          </article>

          {/* Wallpaper #3 */}
          <article className="wallpaper">
            <img src={require('../assets/img/venom-2.jpg')} alt="Wallpaper #1" className="wallpaper" />
          </article>
        </div>
      </div>
    )
}
export default SampleWall