import { useEffect, useState } from 'react'
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTMwNDE4N2U1YzAwMTgxNGM2OWUiLCJpYXQiOjE3MDY3OTUzMjksImV4cCI6MTcwODAwNDkyOX0.z776mNx_nkW-OchLZgq0pX1G0Fvqfzy-JBFhRt38tac'

const MovieDetails = () => {
  const params = useParams()
  const [movieObj, setMovieObj] = useState(null)
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const [rate, setRate] = useState('1')

  const movieData = () => {
    fetch('http://www.omdbapi.com/?apikey=82c26041&i=' + params.movieId)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.status)
        }
      })
      .then((data) => {
        setMovieObj(data)
      })
      .catch((err) => console.log(err))
  }

  const getComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + params.movieId,
      {
        method: 'GET',
        headers: {
          Authorization: API_KEY,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.status)
        }
      })
      .then((data) => {
        setComments(data)
      })
      .catch((err) => console.log(err))
  }

  const deleteComment = (id) => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + id, {
      method: 'DELETE',
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => {
        if (res.ok) {
          getComments()
        } else {
          throw new Error(res.status)
        }
      })
      .catch((err) => console.log(err))
  }

  const addComment = (e) => {
    e.preventDefault()
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        Authorization: API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: comment,
        rate: rate,
        elementId: params.movieId,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setComment('')
          setRate('1')
          getComments()
        } else {
          throw new Error(res.status)
        }
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    movieData()
    getComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const printStars = (n) => {
    const iconContainer = []
    for (let i = 0; i < n; i++) {
      const icon = <i key={i} className="bi bi-star-fill text-warning"></i>
      iconContainer.push(icon)
    }
    return iconContainer
  }

  return (
    <>
      {movieObj && (
        <Container className="text-white mt-5">
          <Row className="justify-content-center mb-4">
            <Col xs={4} className="d-flex justify-content-center">
              <img src={movieObj.Poster} alt={movieObj.imdbID} />
            </Col>
            <Col xs={8}>
              <h1 className="me-3">{movieObj.Title}</h1>
              <Badge bg="danger" pill className="mb-3">
                Rated: {movieObj.Rated}
              </Badge>
              <p>
                <span className="fw-semibold">Duration:</span>{' '}
                {movieObj.Runtime}
              </p>
              <p>
                <span className="fw-semibold">Release Date:</span>{' '}
                {movieObj.Released}
              </p>
              <p>
                <span className="fw-semibold">Genres:</span> {movieObj.Genre}
              </p>
              <p>
                <span className="fw-semibold">Director:</span>{' '}
                {movieObj.Director}
              </p>
              <p>
                <span className="fw-semibold">Actors:</span> {movieObj.Actors}
              </p>
              <p>
                <span className="fw-semibold">Plot:</span> {movieObj.Plot}
              </p>
              <p>
                <span className="fw-semibold">Awards:</span> {movieObj.Awards}
              </p>
              <p>
                <span className="fw-semibold">Metascore:</span>{' '}
                {movieObj.Metascore + ' '}/ 100
              </p>
              <p>
                <span className="fw-semibold">imDB Rating:</span>{' '}
                {movieObj.imdbRating} / 10
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <h1 className="mb-4">Commenti</h1>
            <Col xs={12} lg={7}>
              {comments.map((el) => (
                <div key={el._id}>
                  <div className="d-flex justify-content-between">
                    <p>
                      <span className="fw-semibold me-2">{el.author}</span>
                      {printStars(el.rate)}
                    </p>
                    <Button
                      variant="danger"
                      onClick={() => deleteComment(el._id)}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                  </div>
                  <p className="fst-italic border-bottom border-secondary">
                    {el.comment}
                  </p>
                </div>
              ))}
            </Col>
            <Col xs={12} lg={5}>
              <Form className="d-flex flex-column" onSubmit={addComment}>
                <Form.Group className="mb-2">
                  <Form.Label>Valutazione (da 1 a 5 stelle)</Form.Label>
                  <Form.Select
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Aggiungi un commento</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="secondary"
                  className="align-self-end mt-2"
                >
                  INVIA
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default MovieDetails
