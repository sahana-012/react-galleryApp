// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onClickItem, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const activeImgBtnClassName = isActive ? 'highlight' : ''

  const onClickImgItem = () => {
    onClickItem(id)
  }

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickImgItem}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeImgBtnClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
