import React from "react";

const TouristInfoCards = () => (
  <div className="d-flex flex-row justify-content-center">
    <TouristInfoCard
      imgSrc="https://peoplemakeglasgow.com/imager/general/76609/West-end-Kelvingrove-Art-Gallery-Content-Block_11e6b377409ad0b26f1269c19e5bbf18.jpg"
      cityLink="https://peoplemakeglasgow.com"
      cityName="Glasglow"
      cityDescription="Glasgow (Glaschu in Scottish Gaelic, or Glesga in Scottish), officially City of Glasgow, is a city and a council of Scotland, in the United Kingdom.2 3 It is the largest city in Scotland and the third in the United Kingdom after London and Birmingham, and is the UK's most populous council and 10th most populous metropolitan area in its Greater Glasgow conurbation, after Greater London."
    />
    <TouristInfoCard
      imgSrc="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FLakes2_1517154837.jpg&action=ProductDetailFullWidth2"
      cityLink="https://visitmanchester.com"
      cityName="Manchester"
      cityDescription="Manchester1 is a city and a metropolitan municipality of the county of Greater Manchester in England, United Kingdom. It obtained its city status in 1853 and had an estimated population of 530,300 inhabitants in 2015 with an urban population of 3.2 million.2 In turn, it is part of the third largest urban agglomeration in the United Kingdom, after London and Birmingham. ."
    />
    <TouristInfoCard
      imgSrc="https://media.gettyimages.com/photos/london-skyline-picture-id1170301001?s=2048x2048"
      cityLink="https://visitlondon.com"
      cityName="London"
      cityDescription="London is the capital and largest city of England and the United Kingdom.3 4 Situated on the banks of the River Thames, London has been an important human settlement since it was founded by the Romans with the name of Londinium almost two millennia ago"
    />
  </div>
);

const TouristInfoCard = props => (
  <div className="card text-center">
    <img src={props.imgSrc} className="card-img-top h-50" alt="#" />
    <div className="card-body">
      <h3>{props.cityName}</h3>
      <p>{props.cityDescription}</p>
      <a href={props.cityLink} className="btn btn-primary">
        More Information
      </a>
    </div>
  </div>
);

export default TouristInfoCards;
