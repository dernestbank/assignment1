import mysignup from "./signup.module.css"

// import { useHistory, Link, Redirect } from 'react-router-dom'

import { useState } from 'react'

import signupImage from "./girl.jpg";


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
                                        <label >First Name</label>
                                        <input type="text" name="" id="" />
                                        </div>


                                        <div>
                                        <label htmlFor="">Email</label>
                                        <input type="email" name="" id="" />
                                        </div>
                                       
                                        <div class="country-form-group">
                                            <label for="">Country</label>
                                            <select class="form-control" name="" id="">
                                                <option>Ghana</option>
                                                <option>Nigeria</option>
                                                <option>USA</option>
                                            </select>
                                        </div>
                                        


                                       


                                        <label htmlFor="">Password</label>
                                        <input type="password" name="" id="" />
sdfgdsf
                                    {/* </form> */}

dgsdfgsdfgsdfgsdfgsdfg
                                </div>

                                <div className={mysignup.middleRight}>
                                    {/* <form > */}
                                        <label htmlFor="">Surname</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">Phone Number</label>
                                        <input type="tel" name="" id="" />
                                        <label htmlFor="">City</label>
                                        <input type="text" name="" id="" />
                                        <label htmlFor="">confirm password</label>
                                        <input type="password" name="" id="" />
zvcxbxcvb
                                    {/* </form> */}
xbxcvbxcvb
                                </div>
                            </div>



                            <div className={mysignup.centerBottom}>

                                {/* <form action=""> */}
                                    <label htmlFor="">Gender</label>
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Male</label>
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Female</label>
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Other</label>
                                    <input type="radio" name="" id="" />

                                
                                    <button type="submit">Submit</button>

                                {/* </form> */}
                            </div>


                        </div>


                    </div>

                </div>


            </div>











        </div>



    )
}


export default Signup;

