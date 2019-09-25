import React from 'react';
import '../style/Home.css';
import { useSpring, animated as a } from "react-spring";

const Home = () => {
    const contentTop = useSpring({ //animering för förnamnet, vänstra toppen del
        config: { duration: 500 },
        opacity: 1, from: {opacity: 0},
        marginLeft: 70, from: {marginLeft:-500}
    });

    const contentRight = useSpring({ //Animering för portfolie
        delay:1200,
        to: async (next, cancel) => {
            await next({opacity: 1, config: { duration: 500}})
            while(true){
                await next({config: { duration: 500} }) // väntar i 500 ms innan den blir darkred
                await next({color:' rgb(228, 37, 85);', config: { duration: 1500} }) // 1500 ms tills den blir darkred
                await next({ marginLeft: 2, config: { duration: 500} }) // på 500 ms rör den sig till höger
                await next({color:'#593656', config: { duration: 1500} }) //1500 ms tills den blir darkgrey
                await next({ marginLeft: 0, config: { duration: 500}}) // på 500 ms rör den sig tillbaka till vänster (postionen 0)
                await next({color:'gold', config: { duration: 1500} })  //1500 ms tills den blir gold
                // await next({config: { duration: 1500} }) //Väntar i 1500 ms
            }
        },
        from: {color:'white', opacity:0, marginLeft:0}, // vad den är i början av to asyns funktionenen. Dan går på alla värden som finns i denna rad. Vi anger standardvärden här. Om vi lägger till margin top måste den läggas till här och sen kan du lägga den i asyn delen
      })

    const contentBottom = useSpring({ //animering för Efternamnet, vänstra botten del
        delay: 800,
        opacity: 1, from: {opacity: 0}
    });
    return (
        <div className="container_home">
            <div className="container_left">
                <a.h1 className="cont_header_text_left_top" style={contentTop}>FRIDA</a.h1>
                <a.h1 className="cont_header_text_left_bottom" style={contentTop}>SCHOULTZ</a.h1>
                <p className="line_top"></p>
                <p className="line_bottom"></p>
                <a.p className="header_text" style={contentBottom}>frontend developer student</a.p>
            </div>
            <div className="container_right">
                    <a.h1 className="cont_header_text_right" style={contentRight}>PORTFOLIO</a.h1>
            </div>
        </div>
    )

}
export default Home;