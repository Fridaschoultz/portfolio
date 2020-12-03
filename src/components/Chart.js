import React, {Component} from 'react';
import '../style/Chart.css';
import { Doughnut } from "react-chartjs-2"


class Chart extends Component {

    render(){
        return (
            <div>  
                <div className="chart_container">   
            <div className="doughnut_chart1">

    <Doughnut
        data={{
          labels: ['JAVASCRIPT', 'PHP', 'MYSQL', 'WORDPRESS', 'REACT', 'GATSBY', 'JEKYLL',],
          datasets: [
            {
              label: "Skill set",
              data: [50, // javascript
                    30, // PHP
                    30, // mysql
                    50, // wordpress
                    50, // react
                    30, // gatsby
                    30], // jekyll
              backgroundColor: [
                "#2D253A", // javascript
                "#FFFFFF", // php
                "#593656", // mysql
                "#2D253A", // wordpress
                "#81476D", // REact
                "#FFFFFF", // gatsby
                "#593656"], // jekyll
                color: ['white', 'white', 'white', 'white', 'white', 'white', 'white'],
            },
          ],
        }}
        options={{
          title: {
            display: true,
            //text: "Skill set (%)",
            fontSize: 30,
            //fontColor:'white'
          },
			legend: {
				labels: {
                // This more specific font property overrides the global property
					fontColor: 'black'
				}
			}
        }}
      />
      </div>

      <div className="doughnut_chart2">

    <Doughnut
        data={{
            labels: ['PHOTOSHOP', 'ADOBE XD', 'SASS', 'ILLUSTRATOR', 'GITHUB', 'HTML/CSS'],
            datasets: [
            {
            label: "skill set",
            data: [30, // pHOTOSHOP
                   50, // ADOBE XD
                   20, // SASS
                   25, // illustrator
                   80, // gITHUB
                   90], // HTML/CSS
            backgroundColor: [
                "#2D253A", // javascript
                "#FFFFFF", // php
                "#593656", // mysql
                "#2D253A", // wordpress
                "#81476D", // REact
                "#593656"], // gatsby
            },
            ],
        }}
            options={{
                title: {
                display: true,
                //text: "Skill set (%)",
                fontSize: 30,
                fontColor:'white',
                //fontFamily: 'Oswald',
                },
                legend: {
                  labels: {
                          // This more specific font property overrides the global property
                    fontColor: 'black'
					
                  }
                }
                }}
    />
        </div>
    </div>
</div>
    )
    }        
}

    export default Chart;