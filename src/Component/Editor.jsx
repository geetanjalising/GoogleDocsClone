import { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import image from './unnamed.png'
import {Box} from '@mui/material';
import styled from '@emotion/styled';

const Component = styled.div`
    background: #F5F5F5;
`

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  
  const quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });

const Editor=()=>{

    useEffect(()=>{
         const quillServer=new Quill('#container',{theme:'snow', modules:{toolbar:toolbarOptions}})
    },[])

    return(<>
    <div className='top'>
    <img src={image}></img>
    <span style={{color:"black",fontSize:"25px"}}>Google</span> <span style={{color:"gray",fontSize:"25px"}}>Docs</span></div>
        <Component>
             <Box className='container' id='container'></Box>
        </Component>
       </>
    )
}
export default Editor;