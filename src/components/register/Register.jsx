import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaRegEye } from "react-icons/fa";


export function ComponentRegister() {
  return (    
      <form className="flex justify-center items-center gap-24">

        <div className=" w-[400px] max-md:max-w-full">
          
          <div className="my-[10px] block ">
            <Label htmlFor="email">Username</Label>
            <TextInput name="username" type="name" required placeholder="Enter your username"/>
            
          </div>

          {/* <div className="my-[10px] block">
            <Label htmlFor="email">Last Name</Label>
            <TextInput name="lastname" type="name" required />
            
          </div> */}

          <div>
            <div className="my-[10px] block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
            
          </div>

          <div className="relative">
            <div className="my-[10px] block">
              <Label htmlFor="password1" value="Your password"/>
            </div>
            <TextInput id="password1" type="password" required placeholder="Enter your password"/>
            
            <div className="absolute top-[50px] right-[10px]">
              <FaRegEye />
            </div>
          </div>
          
          <div className="relative">
            <div className="my-[10px] block">
              <Label htmlFor="comfirm password" value="Comfirm password" />
            </div>
            <TextInput id="comfirm password" type="password" required  placeholder="Enter your password"/>
            <div className="absolute top-[50px] right-[10px]">
              <FaRegEye />
            </div>
          </div>

          <div className="my-[10px] flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          <Button className="my-[15px] " type="submit " color="purple">
            Create an Account
          </Button>
          <p className="mt-2 text-sm text-black underline max-md:max-w-full">Already have an account? {""} <a href="#" className="text-blue-600">login</a></p>
        </div>


        <div className="align-items-center w-[500px] ">
            <img
              src="src\assets\img-register\register.jpg"
              alt=""
            />
          </div>

      </form>
    
  
  );
}
