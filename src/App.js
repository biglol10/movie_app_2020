import React from "react";
import Potato from "./Potato";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 4.9,
    },
    {
        id: 3,
        name: "Bibimbap",
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 5,
    },
    {
        id: 4,
        name: "Doncasu",
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 5,
    },
    {
        id: 5,
        name: "Kimbap",
        image:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 5,
    },
];

function Potato2() {
    return <h1>I love Potato 2</h1>;
}

function Food(props) {
    console.log(props);
    return <h1>I like {props.fav}</h1>;
}

// function Food({fav}){  이렇게 해도 됨
//   return <h1>I like {fav}</h1>;
// }

function Food3({ name, picture }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <img src={picture} />
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Hello</h1>
            <Food
                fav="kimchi"
                something={true}
                papapapa={["hello", 1, 2, 3, 4, true]}
            />
            <Food fav="ramem"></Food>
            <Food fav="samgiopsal" />
            {foodILike.map((dish) => (
                <Food3 name={dish.name} picture={dish.image} />
            ))}
        </div>
    );
}

export default App;
