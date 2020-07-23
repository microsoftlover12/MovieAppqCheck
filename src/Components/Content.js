import React, { useState } from 'react';
import { Link, Router, Route } from 'react-router-dom'




const Content = () => {
    const [movies, setMovies] = useState([
        { id: 1, name: 'FIRST MAN' },
        { id: 2, name: 'INTERSTELLAR' },
        { id: 3, name: 'JOHN WICK 2' },
        { id: 4, name: 'MOWGLI' }
    ]);

    const [search, setSearch] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);



    const filterMovie = () => {
        setFilteredMovies(
            movies.filter(movies =>
                movies.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }



    return (

        <>
            <Router>
                <div>
                    <input type='text' placeholder='search movies' onChange={e => (e.target.value)} />
                    <button onClick={() => {
                        setSearch([...movies, { id: movies.length, name: filteredMovies }])
                        setFilteredMovies('')
                    }}>Search</button>


                </div>
                <br></br>
                <div>
                    <img src='/firstman.jpg' />
                    <div>
                        <p>FIRST MAN</p>
                        <Link to='/FirstMovieContent'>
                            <button renderAs="button">Plus..</button>
                        </Link>

                    </div>
                    <br></br>
                    <img src='/interstellar.jpg' />
                    <div>
                        <p>INTERSTELLAR</p>
                        <Link to='/SecondMovieContent'>
                            <button renderAs="button">Plus..</button>
                        </Link>
                    </div>

                    <br></br>
                    <img src='/johnwick.jpg' />
                    <div>
                        <p>JOHN WICK 2</p>
                        <Link to='/ThirdMovieContent'>
                            <button renderAs="button">Plus..</button>
                        </Link>
                    </div>
                    <br></br>
                    <img src='/mowgli.jpg' />
                    <div>
                        <p>MOWGLI</p>
                        <Link to='/FourthMovieContent'>
                            <button renderAs="button">Plus..</button>
                        </Link>
                    </div>
                    <switch>

                        <Route exact path='/FirstMovieContent' component={FirstMovieContent}></Route>
                        <Route exact path='/SecondMovieContent' component={SecondMovieContent}></Route>
                        <Route exact path='/ThirdMovieContent' component={ThirdMovieContent}></Route>
                        <Route exact path='/FourthMovieContent' component={FourthMovieContent}></Route>
                    </switch>

                </div>
            </Router>
        </>





    )
}


export default Content