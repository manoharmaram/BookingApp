import React from 'react'
import './Membership.css'

export default function PurchasedPlan() {
  return (
   <section className='mani-content'>
    <div className='login-form'>
    <h2>Please sign in to continue</h2>
    </div>

    <div className='wrapper-details'>
    <p>You can use social media to continue</p>
   

    <div className='social-app'>
      <a href='facebook'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg></a>

      <a href='twitter'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg></a>

      <a href='google'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></a>

    </div>
    </div>


    <div className='wrapper-details'>
    <div className="detail-login-step">
                    <div className="detail-step__item left-side">
                        <div className="detail-step__item-sign-in">
                            <h3 className="title">Existing clients: please sign in here</h3>
                            <div className="form-group email">
                              <label className="control-label">Email:</label><br/>
                              <input type="email" placeholder="Email"/>
                              <p class="help-block"></p>
                            </div>
                        
                        <div className="form-group password">
                          <label className="control-label">Password:</label><br/>
                          <input name="password" placeholder="Password"/><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
        </div>
        
        <div className='remind-password-customer'>Remind Password</div>

        <div className="form-group remember-me">
        <div className="checkbox">
        <input type="checkbox"/>
        <label>Remember me <span>(Cookies used)</span></label>
        </div></div>
        <div className="button-wrapper">
        <button>Sign in and continue</button></div>

      </div>
      </div>
      </div>

   
    <div className="detail-step__item right-side">
      <div className="detail-step__item-sign-up">
            <h3>New clients: please sign up here</h3>

          <div className="form-group name">
                <label>First Name:</label><span>*</span><br/>
                <input type="text" placeholder="First Name"/>
            </div>

        <div className="form-group email">
            <label>Email:</label><span>*</span><br/>
            <input type="email" placeholder="Email"/>
        </div>

        <div className="form-group phone">
            <label>Phone:</label><span>*</span><br/>
        <div class="input-group">
            <input placeholder="Phone"/></div>
        </div>

        <div className="form-group">
             <label>Password</label><span>*</span><br/>
            <div class="one-row">
               <input type="password" placeholder="Password"/>
               <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg></span>
         </div>
     
            </div>

          <div className="form-group address1">
            <label>Address 1:</label><span>*</span><br/>
            <input type="text" placeholder="Address 1"/>  
            </div>

            <div className="form-group address2">
                <label>Address 2:</label><br/>
                <input type="text" placeholder="Address 2"/>
            </div>
    
            <div className="form-group ">
                <label>Payment Customer ID:</label><br/>
                <input type="text" placeholder="Payment Customer ID"/>
            </div>


            <div className="terms-and-conditions-block"><div>
                <div className="form-group ">
                    <div className="one-row-checkbox">
                        <div className="custom-checkbox">
                            <input type='checkbox' name="simplybook-terms" value="1"/>
                            <label><a href="https://simplybook.me/en/terms-and-conditions#tab-for-clients">I agree with SimplyBook.me Terms &amp; Conditions<span class="required">*</span></a></label>
                </div> 
                    </div>
                    </div>


                <div className="form-group ">
                    <div className="one-row-checkbox">
                        <div className="custom-checkbox">
                            <input type='checkbox' name="cancellation-terms" value="1"/>
                            <label><a href="popup-tester">I agree with cancellation policy<span class="required">*</span></a></label>
                     </div>
                </div>
                </div>


                    <div className="form-group ">
                        <div className="one-row-checkbox">
                            <div className="custom-checkbox">
                                <input type='checkbox'/>
                                <label>Subscribe to be one of first to receive our promotions, cool offers and get other relevant information.</label>
                        </div>
                    </div>
                    </div>
</div></div>

                            <div className="button-wrapper">
                                <button>Sign up and continue</button>
                            </div>
                            </div>
                            </div>
             </div>


   </section>



  )
}
