import React from 'react';
 import './submitSpeech.style.css';
 import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";


 const SubmitSpeech=({addSpeech,date, handleChange  ,handleDate})=>{
     return(
         <div className='speechbody'>
             <form onSubmit={addSpeech}>
                 <textarea  name='textarea'placeholder='Speech content is shown here' onChange={handleChange} >
                 </textarea>
                 <div  className='ingroup'>
                 <input  name='author' type='text'  placeholder='Author' onChange={handleChange} />
                 <input name='subject' type='text' placeholder='Subject area keywords'onChange={handleChange}/>
                 <DatePicker  selected={date} onSelect={handleDate} />
                 </div>
                <div className='groupbtn'>
                <button type='submit'>save</button>
                <button >delete</button>
                <button>share</button>
                </div>
             </form>


         </div>
     )

 }
 export default SubmitSpeech;