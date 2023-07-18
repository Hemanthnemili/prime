import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 4,
  }
  const {movieDetails} = props

  return (
    <>
      <Slider {...settings}>
        {movieDetails.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetail={eachMovie} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
