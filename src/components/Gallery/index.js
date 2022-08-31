import {Component} from 'react'

import ThumbnailItem from '../ThumbnailItem'

import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.
class Gallery extends Component {
  //   state = {
  //     imgUrl: imagesList[0].imageUrl,
  //     imgAltText: imagesList[0].imageAltText,
  //   }

  //   onClickItem = (imageUrl, imageAltText) => {
  //     this.setState({imgUrl: imageUrl, imgAltText: imageAltText})
  //   }

  state = {
    activeThumbnailId: imagesList[0].id,
  }

  onClickItem = id => {
    this.setState({
      activeThumbnailId: id,
    })
  }

  render() {
    // const {imgUrl, imgAltText} = this.state
    const {activeThumbnailId} = this.state
    const {imageUrl, imageAltText} = imagesList[activeThumbnailId]

    // const checkList = imagesList.filter(
    //   eachValue => eachValue.imageUrl === imgUrl,
    // )
    // const {id} = checkList[0]
    // const {id} = selectedImg[0]
    return (
      <div className="app-container">
        <img src={imageUrl} alt={imageAltText} className="image" />
        <h1 className="main-heading">Nature Photography</h1>
        <p className="name-tag">Nature Photography by Rahul</p>
        <ul className="thumbnail-list">
          {imagesList.map(eachImage => (
            <ThumbnailItem
              key={eachImage.id}
              imageDetails={eachImage}
              onClickItem={this.onClickItem}
              isActive={activeThumbnailId === eachImage.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Gallery
