let api='http://www.omdbapi.com/?apikey=4bdb14fe&t=';

function search()
{
    let movieName=document.getElementById('movieName').value;
    if(movieName=="")
    {
        movieName="RRR";
    }
    let query=api+movieName;
    fetch(query).then(data=>{
        return data.json();
    }).then(data=>{
        let image=document.getElementById('img');
        let Actors=document.getElementById('Actors');
        let Title=document.getElementById('Title');
        let BoxOffice=document.getElementById('BoxOffice');
        let Country=document.getElementById('Country');
        let Director=document.getElementById('Director');
        let Genre=document.getElementById('Genre');
        let Language=document.getElementById('Language');
        let Plot=document.getElementById('Plot');
        let Writer=document.getElementById('Writer');
        let Year=document.getElementById('Year');
        let imdbRating=document.getElementById('imdbRating');

        image.src=data.Poster;
        Actors.innerHTML=data.Actors;
        Title.innerHTML=data.Title;
        Title=document.getElementById('Title');
        BoxOffice.innerHTML=data.BoxOffice;
        Country.innerHTML=data.Country;
        Director.innerHTML=data.Director;
        Genre.innerHTML=data.Genre;
        Language.innerHTML=data.Language;
        Plot.innerHTML=data.Plot;
        Writer.innerHTML=data.Writer;
        Year.innerHTML=data.Year;
        imdbRating.innerHTML=data.imdbRating;
    })
}

search();