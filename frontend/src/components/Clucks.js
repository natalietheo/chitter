import { useState } from 'react';

const Clucks = () => {    

  const [cluckPost, setCluckPost] = useState("");
  const handleCluckPost = () => {
    setCluckPost(cluckPost);
  }

    return (
        <div className="form-control">
        <label className="label">
        </label>
        <input type="text" placeholder="What's happening?" className="input input-bordered input-primaryw-full max-w-xs h-24" />
        <label className="label">
          <span className="label-text-alt">max 120 characters</span>
        </label>
        

        <button className="btn btn-outline w-20" onClick={handleCluckPost}>Cluck</button>
          </div>)
}

export default Clucks