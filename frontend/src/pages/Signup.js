import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="content-center">
      <div className="flex-col flex items-center m-8">
        <div className="text-3xl">
          <h1 className="p-8">Signup here!</h1>

          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
