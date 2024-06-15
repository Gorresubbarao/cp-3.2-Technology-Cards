// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} profile-card-container`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <div className="img-container">
          <img src={imgUrl} alt={title} className="img" />
        </div>
      </div>
    </li>
  )
}

export default CardItem
