import './checkout.css';
export function Checkout(){
    return(
    <div className="checkout-form">
        <div className="contact-leftblock">

             <form method="post" action="#" enctype="" name="contact" className='contact-form'>
                <div className="contact-field">
                    <input type="text" placeholder="Name" name="firstname" id="fname" value="" />
                    
                </div>
               
                <div className="contact-field">
                    <label>Destination</label>
                    <select class="field_input">
                        <option>Nepal</option>
                        <option>India</option>
                        <option>China</option>
                        <option>United states</option>
                    </select>
                </div>
                
                <div className="contact-field">
                    <label for="Address"></label>
                    <input type="text" placeholder="Address" id="add" value="" />
                </div>
                

                <div className="contact-field">
                <input type="text" placeholder="City" name="city" id="city" value="" />
                </div>

               <div className='contact-field'>
               <label>Select state</label>
                <select className="field_input">
                    <option>Nepal</option>
                    <option>India</option>
                    <option>China</option>
                    <option>United states</option>
                </select>
               </div>
        
       
                 <div className="contact-field">
                    <input type="text" placeholder="Postal or zip code" name="code" id="code" value="" />
                    <input type="text" placeholder="Phone" name="phone" id="phone" value="" />
                </div>

                 <div className="contact_field">
                     <label>
                       <input type="checkbox" checked="checked" name="sameadr"/> Use as billing address
                     </label>
                </div>


            </form>
        </div>
        {/* <div className="contact-rightblock ">
             <h1>Summary</h1>
                <div className="summary-box">
                    <div className="left">
                
                        <img src=".jpg"><br />
                        <img src=".jpg"><br />
                        <img src=".jpg">
                    </div>
                    <div className="right">
                      <p className="aa">
                    <b>Rick Owners</b><br />
                    <b>$1.192.00</b>
                        </p>
                        <p className="aa">
                        <b>Zenith</b><br />
                        <b>$7.945.00</b>
                            </p>
                     <p className="aa">
                    <b>Off-White</b> <br />
                    <b>$1,000.00</b>
                        </p>
                     </div>

                </div>
                <div className="total-block">
            <div className="bb">
                <b>Total</b>
                <b>$10.498.00</b>
            </div>
            <p className="tb">Import duties included</p>
            <div className="buttonbox">
                <div className="btn">Save & Continue </div>
            </div>
        </div>
        </div> */}

        
     </div>
       
    );
}