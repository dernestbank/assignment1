import mysignup from "./signup.module.css"

// import { useHistory, Link, Redirect } from 'react-router-dom'

import { useState } from 'react'

import signupImage from "./animpic.gif";


function Signup() {

    // let history= useHistory();

    // function enter() {

    //     // history.push("/dashboard");
    // }

    var name = "initial word"
    const [content1, newContent] = useState("Initial content")


    function changename() {

        // name2 ='kofi'
        // the above for javascript
        newContent("changed content")




        // To cause a toggle between

        if (content1 == "Initial content") {
            newContent("changed content")
        } else {
            newContent("Initial content")
        }



    }


    return (
        <div>
            {/* 
{content1}
           


<div>
    <button onClick={changename}>Click here</button>
</div>
 */}


            <div className={mysignup.main}>

                <div className={mysignup.bigCenter}>

                    <div className={mysignup.smallCenter}>

                        <div className={mysignup.leftCenter}>

                            <img src={signupImage} alt=" This is an image" />
                        </div>
                        <div className={mysignup.rightCenter}>


                            <div className={mysignup.centerTop}>
                                <span className={mysignup.regTitle}> Registration</span>
                            </div>


                            <div className={mysignup.centerMiddle}>

                                <div className={mysignup.middleLeft}>
                                    {/* <form action=""> */}

                                    <div>
                                       
                                        <input type="text" name="" id="" />
                                        <label className={mysignup.floatlabel}>First Name</label>
                                    </div>


                                    <div>
                                        
                                        <input type="email" name="" id="" />
                                        <label htmlFor="">Email</label>
                                    </div>

                                    <div >
                                       

                                        <select class="form-control" name="" id="">
                                            <option>Ghana</option>
                                            <option>Nigeria</option>
                                            <option>USA</option>
                                        </select>
                                        
                                        <label className={mysignup.country_form_group} >Country</label>
                                    </div>

                                    <div>
                                       
                                        <input type="password" name="" id="" />
                                        <label >Password</label>
                                    </div>
                                    {/* </form> */}

                                </div>


                                <div className={mysignup.middleRight}>
                                    {/* <form > */}
                                        <div>
                                   
                                    <input type="text" name="" id="" />
                                    <label htmlFor="">Surname</label>
                                    </div>

                                    <div>
                                   
                                    <input type="tel" name="" id="" />
                                    <label htmlFor="">Phone Number</label>
                                    </div>

                                    <div>
                                    
                                    <input type="text" name="" id="" />
                                    <label htmlFor="">City</label>
                                    </div>

                                    <div>
                                   
                                    <input type="password" name="" id="" />
                                    <label htmlFor="">confirm password</label>
                                    </div>

                                    {/* </form> */}

                                </div>
                            </div>



                            <div className={mysignup.centerBottom}>

                                <form action="">
                                <label htmlFor="">Gender</label>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Male</label>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Female</label>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Other</label>
                                <input type="radio" name="" id="" />


                                

                                </form>

                                <button type="submit">Submit</button>
                            </div>


                        </div>


                    </div>

                </div>


            </div>











        </div>



    )
}


export default Signup;

