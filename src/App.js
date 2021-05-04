import React from 'react';
import './bulma.css';
import './App.css';


class App extends React.Component {
    
   render() {
       return(
       
            <div className="container">
               <div className="columns">
                   <div className="column is-two-thirds left">
                        <section class="section">
                            <div className="title">LONGBOXES</div>
                                    <p class="important">
                                        Located in downtown Bethlehem, PA, Longboxes is a comic book shop specializing in the trade of comics, books, toys, figures and apparel. Everything for sale has been approved by our in store professionals and all comics have been CGC graded and made sure to be 100% authentic. <br></br><b>Create your account and get started today!</b>
                                    </p>
                            
                            <div class="control">
                                <div className="create-button">
                                <button class="button is-warning"><b>CREATE ACCOUNT</b></button>
                                </div>
                            </div>
                      
                        </section>
                   </div>
                   
                   <div className="column is-one-third right">
                        <section class="section">
                            <div className="login-title">LOGIN</div>
                            
                            <div class="field">
                                <label class="label">USERNAME</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="e.g. ClarissaKimak123"></input>
                                    </div>
                            </div>

                            <div class="field">
                                <label class="label">PASSWORD</label>
                                    <div class="control">
                                        <input class="input" type="password"></input>
                                    </div>
                            </div>
                            
                            <div class="field is-grouped is-grouped-centered">
                                <p class="control">
                                    <a class="button is-warning"><b>SUBMIT</b></a>
                                </p>
                                
                                <p class="control">
                                    <a class="button is-light"><b>CANCEL</b></a>
                                </p>
                            </div>
                            
                        </section>
                   </div>
               </div>
            </div>
       
       )
   } 
    
}

export default App;
