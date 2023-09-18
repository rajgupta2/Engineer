"use client";
import HomeLayout from '@components/homeLayout';
import Card from '@components/card';
import Notes from '@models/Notes';
import {useState} from 'react';


function index() {

  const [cardHide_Show,displaycard]=useState("grid");
  const [IframeHide_Show,displayiframe]=useState("none");
  
  function cardclick(event){
    var isPdf=event.target.href.indexOf("pdf");
    var isTxt=event.target.href.indexOf("txt");
    if(isPdf!=-1)
      event.target.href+="#toolbar=0&navpanes=0";
    if(isPdf!=-1 || isTxt!=-1){
      event.target.target="iframe_value";
      displaycard("none");
      displayiframe("inline");
    } 
  }
  function back_to_home(){
    displaycard("grid");
    displayiframe("none");
  }
  function MakeCard() {
    var i = 1;
    return Notes.map(function (e) {
      return <Card key={i++} onClick={cardclick}  Subject={e.Subject} Description={e.Description}
        Notes={e.Notes} Tutorial={e.Tutorial} Practice={e.Practice} />
    });
  }
  return (
    <HomeLayout>
      <main className='lg:ml-24 lg:mr-24 mt-24'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-12 mb-24' style={{display:cardHide_Show}}>
          <MakeCard />
        </div>
        <div onClick={back_to_home} style={{cursor:"pointer"}}>Back_to_home</div>
        <iframe style={{display:IframeHide_Show,minHeight:560}} id='Iframe' name="iframe_value" className='border bg-white border-black w-full overflow-auto'></iframe>
      </main>
    </HomeLayout>
  )

}
export default index;
