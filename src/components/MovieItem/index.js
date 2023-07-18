import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetail} = props
  const {videoUrl, thumbnailUrl} = movieDetail

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup-cont"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              onClick={() => close()}
              className="close-button"
              data-testid="closeButton"
            >
              <IoMdClose size="20" />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
