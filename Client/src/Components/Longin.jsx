import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { Local_User } from "../Redux/action"



export const Login = () => {
    const LoginUserData = useSelector((state)=>state.UserData)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    let debounce

    function handlesubmit(e){
        e.preventDefault()
        clearTimeout(debounce)
        debounce=setTimeout(()=>{
            fun(e)
        }, 1000)
    }

    async function fun(e){
        let toto=false
        let obj
        let email = e.target[0].value
        let pass = e.target[1].value
        
        LoginUserData.forEach((ele)=>{
            if(ele.email == email && ele.password == pass ){
                obj = ele
                toto = true
            }
        })

        // await axios.get(`https://shre-e0b9b-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json`)
        //     .then((res)=>{
        //         let email = e.target[0].value
        //         let pass = e.target[1].value
        //         Object.values(res.data).forEach((ele)=>{
        //             if(ele.email == email && ele.password == pass ){
        //                 obj= ele
        //                 toto=true
        //                 return 
        //             }
        //         })
        // })


        
        if(toto){
           alert("Login Successfull")
           dispatch(Local_User(obj))
           navigate('/')
        }else{
            alert("Login Error")
        }
    }

    return (<>
        <form onSubmit={handlesubmit}>
            <h2>Login using Email</h2>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="study@gmail.com" />
            <label htmlFor="pass">Password:</label>
            <input type="password" id="pass" placeholder="Min(4) max(8)" />

       

            <button type="submit">Submit</button><br />
            <span>Don't have an account</span> <a style={{ color: 'blue' }}> <button type="button" onClick={() => navigate('/Signup')}>SignUp</button></a>
        </form>
    </>)
}

