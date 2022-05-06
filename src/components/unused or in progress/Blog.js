import React, {useState} from 'react';
import './App.css';

function Blog(props){
  const [isShown, setIsShown] = useState(false);

    return (
        <div className="list">

        <div className="post">
            <p style={{color:"red"}}>Monday, January 10th, 2022, 2:02AM</p>
            <p style={{fontWeight:"bold",fontSize:"x-large"}}>collapse</p>
  
            <p style={{fontWeight:"bold"}}>I'll make a claim and say there is something fundamentally different about the gen-z condition. </p>
  
            <p>Millenials growing up in the 90s, got the last glimpse of a life before the literal "collapse" of both time and space. By collapse, I mean the omnipresence of the internet has caused all of recorded time/indexed space to fold in on itself, creating a homogenous soup that lacks a familiar dimension of any kind. They got to experience life before the internet could dredge up content from any era in history, from anywhere in the world. Here is the issue: they got to experience a life where cultural innovation is not at a standstill. </p>
  
            <p>I'm not going to lie, this is Mark Fisher's idea here ^. But our particular angle as Generation Z, is that we aren't old enough to know anything else but this ubiquitous internet age. Whereas every decade previous might have had multiple simultaneous cultural inventions (e.g. ~90s music genres: shoegaze, grunge, skate-punk, euro-electronic dance) Fisher's claim is: from the 2000s onward, all cultural innovation has been simply rehashing someone else's authenticity from the 60s-90s (due to the internet, mostly). </p>
              
            <p> As a music blogger writing in 2014, Fisher digs at The Artic Monkeys, Adele, Amy Winehouse, and Mark Ronson as exemplaries of this popular rehashing. Artic Monkeys as a 80s post-punk brit-pop revival band, Amy Winehouse for stylizing herself as a 60s soul singer, Adele as not contributing to any sonic "now" but piggybacking on simple instrumentation to vaguely reference the past whilst not committing to the present. Shit, but can you name a new genre *invented* in the last 20 years? Has the golden age of any cultural movement come in the last 20 years? Where is our peculiar "sound" that dominates popular culture now, that will hopefully die and make way for the next thing?</p>
  
            <p>Tell me if this resonates with you: after 2 years of online life, despite the drawn-out collective trauma of 2020-2021 (due to political unrest + covid death + smoke from record-breaking wildfires + intense heat waves), do you still feel like time is speeding up? That you can't tell if something was 6 months ago or 11? I swear on my life that 2021 was the fastest year I've ever experienced. </p>
  
            <p>If I could give one guess, I'd say it's because most of this trauma is inflicted online. Besides the heat/smoke, we aren't actually there to feel anything material really changing. That says something to me about being online too much: no matter how horrible or great, long or short, something is, it's situation in time and space is completely lost on you if you experience it through a computer. That is so scary to me. On my deathbed, I won't be able to tell my kids that I really *experienced* anything, my life was a blur and events had no sequence.</p>
  
            <p>if you made it this far, thank you for reading. Next time, bill wurtz</p>
  
            <p style={{color:"gray"}}>email me at livmusicx@gmail.com</p>
  
          <p></p>
          <p>- - - - - - - - - - - - - - </p>
          <p></p>
          </div>
        
        <div className="post">
            <p style={{color:"red"}}>Thursday, December 30th, 2021 11:12pm</p>
            <p style={{fontWeight:"bold"}}>euiawfesdljn kdfas</p>
  
            <p>A wonderful paradox we have in the [redacted] scene. Some ask for what they really want by pretending they want it's complete opposite. For example: act the anti-capitalist so you might get the chance to sell tons of merchandise with your name on it. Show you're upset about climate change so you might fly first class on an international tour. Talk about how much you love diversity, because if you don't, your music will never be reviewed by the white and male tastemakers and gatekeepers in this city. We are all struggling to "make it", to "get there", but I am having an ongoing crisis where I can't figure out where "there" is, or if my idea of "making it" is part of a larger scheme inside capitalist realism. My every move is subconciously geared towards selling something to you; so should I try to perform any altruism at all?</p>
  
            <p>On my to-do list are: 1) try not to be a hypocrite, 2) see if i can find a way to be financially viable without feeling like I'm selling out.</p>
            
            <p style={{color:"green"}}>other stuff I'd like to write about:</p>
            <ul>
            <li>my idea about how to make a viable music scene</li>
            <li>can selling stuff be the same thing as sharing?</li>
            <li>the splintering of the subject into the artist and the person</li>
            <li>lack of forgiveness as a symptom of commodification</li>
            <li>does it exist if it's not indexed?</li>
            <li>am i shooting myself in the foot?</li>
            </ul>
            <p style={{color:"gray"}}>email me at livmusicx@gmail.com</p>
  
          <p></p>
          <p>- - - - - - - - - - - - - - </p>
          <p></p>
          </div>
  
  
          <div className="post">
            <p style={{color:"red"}}>Wednesday, December 29th, 2021 4:19am</p>
            <p style={{fontWeight:"bold"}}>there is no game here</p>
  
            <p> Date of website birth: December 28th, 2021 at 2:10pm. </p>
            <p> No one is following you here. you are not indexed. you have no visibility. you can say whatever you want. i could say whatever i want. taking from the proud traditions of billwurtz and kpunk.</p>
            <p> I CAN SCREAM TO YOU; THIS IS MINE. THIS IS MINE. THIS IS MINE. THIS IS MINE. THIS IS MINE. I AM HERE.</p>
            <p> <span className={isShown ? 'highlightable':''}>We can say whatever we want</span>, because there's no game here. no clout, no aesthetic, no posturing. this space here is just you and me. No one else's opinion matters except yours. But we don't have to fear each other, because I'll never find out what your opinion even is. I won't know if you read this, so I'll also never know if you hate it. THAT is the beauty. </p>
            <p>why make a website. First: see
              
              <button
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
                >above</button>
              
              . Second: I am dead sick of "Meta" mediating every online exchange. don't you hate going through zuckerberg to talk to your friends? may we now be left out of this panoptic social hellscape, in which our every contribution puts ad money in someone's pocket. </p>
              <p></p>
          </div>
  
          
        </div>

    );
}

export default Blog;

export { Blog };