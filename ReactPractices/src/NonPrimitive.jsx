import { useState } from "react";

const NonPrimitive = () => {
    const [profile, setProfile] = useState({
        name: "",
        city: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setProfile((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
    
    return(
        <>
      <div>
        <label>Name</label>
        <input name="name" value={profile.name} onChange={handleInputChange} />
        <p>Name: {profile.name}</p>
      </div>
      <div>
        <label>City</label>
        <input name="city" value={profile.city} onChange={handleInputChange} />
        <p>City: {profile.city}</p>
      </div>
      </>
    )
}
export default NonPrimitive;