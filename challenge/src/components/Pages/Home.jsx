import React from 'react'
import BabyYoda from "../../mandalorian/BabyYoda";
import NumberLogger from "../../NumberLogger";
import strings from "../../strings.json";
import Fade from "react-reveal/Fade";
import Table from '../Table'
import GIF from "../Gif"
import MonthAndYear from '../MonthAndYear';
import KrabbyPatty from "../KrabbyPatty"

const Home = (props) => {
    return (
        <div>
            <div>
            <div
              style={{ width: "100%", marginTop: "4rem", textAlign: "center" }}
            >
              <Fade left cascade>
                {strings.greeting}

                <form action="https://github.com/HackRU">
                  <input type="submit" value="Go to HackRU's GitHub!" />
                </form>

                <button type="button"> Help Button </button>

                <NumberLogger />
              </Fade>
            </div>
              <MonthAndYear />
              <BabyYoda />
              {/* <Table/> */}
              {/* <div style={{marginTop: "1%", marginBottom: "1%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
              </div> */}
              <KrabbyPatty />
          </div>
        </div>
    )
}

export default Home
