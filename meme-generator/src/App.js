import React, { useState, useEffect, createContext } from "react";
import { Meme } from './Meme.js' 
import { Meme2 } from './Meme2.js' 
import Header from "./Header.js";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import { Grid, Paper } from "@mui/material";
import { blue } from "@mui/material/colors";
import { color } from "@mui/system";

const objectToQueryParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
  return '?' + params.join('&')
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const themeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState(lightTheme)
  const toggleTheme = () => {
    setTheme((theme) => (theme === lightTheme? darkTheme: lightTheme))
  }
  
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [meme, setMeme] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const memesPerPage = 10
  const noOfMemesSeen = currentPage * memesPerPage;

  useEffect(() => { 
    fetch("https://api.imgflip.com/get_memes")
    .then(x => x.json()
    .then(response => setTemplates(response.data.memes))
    );
  }, [])

  if (meme) {
    return (
    <div style={{ textAlign: "center" }}>
      <img 
      style={{ width: 500 }}
      src={meme} alt="Custom Meme" />
    </div>
  )}

  //GET CURRENT MEMES
  const indexOFLastMeme = currentPage * postsPerPage;
  const indexOfFirstMeme = indexOFLastMeme - postsPerPage;
  const currentMemes = templates.slice(indexOfFirstMeme, indexOFLastMeme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{textAlign: "center"}}>
        {template && (
        <>
        <h1>Make it Funny!</h1>
        <form onSubmit={async e => {
          e.preventDefault()
          //Add logic to create meme from API
          const params = {
            template_id: template.id,
            text0: topText,
            text1: bottomText,
            username: process.env.REACT_APP_IMGFLIP_USERNAME,
            password: process.env.REACT_APP_IMGFLIP_PASSWORD
          }
          const response = await fetch(`https://api.imgflip.com/caption_image${objectToQueryParam(
            params
          )}`)
          const json = await response.json()
          setMeme(json.data.url)
        }}>
        <TextField placeholder="top-text" value={topText} onChange={e => setTopText(e.target.value)}/><br />
        
        <Meme2 template={template} /><br />
        <TextField placeholder="bottom-text" value={bottomText} onChange={e => setBottomText(e.target.value)} />
        <Button startIcon={<SaveOutlinedIcon />} type="submit" variant="contained" color="secondary">
              Submit
            </Button>
          
        </form>
        </>)}
        {!template && (
          <>
          <h1>Pick a template</h1>
          <Button onClick={toggleTheme} variant="contained" color="secondary">
              Change Theme
            </Button>
          <Container>
            <Grid item>
            {templates.map(template => {
              return (
                <Meme 
                template={template}
                onClick={() => {
                  setTemplate(template);
                }}
              />
              );
            })}
            </Grid>
            </Container>
          </>
        )}
      </div>
      </ThemeProvider>
    
  );
}


export default App;
