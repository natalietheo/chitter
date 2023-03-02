const SignupForm = () => {
  return (
  <div className="absolute inset-x-0 top-20 m-8">
      <div className="text-3xl">
        <form className="flex-col flex items-center margin" >
          <input placeholder="Name" id="name" type='text' className="input input-bordered input-primary w-full max-w-xs" /><br/>
          <input placeholder="Email" id="email" type='text' className="input input-bordered input-primary w-full max-w-xs"  /><br/>
          <input placeholder="Password" id="password" type='password' className="input input-bordered input-primary w-full max-w-xs" /><br/>
          <input id='submit' type="submit" className="input input-bordered input-primary w-full max-w-xs"   />
        </form>
      </div>
    </div>



  );
};

export default SignupForm;
