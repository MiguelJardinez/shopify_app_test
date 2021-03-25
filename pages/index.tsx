import React, {useState} from 'react';
import Principal from '../layouts/Principal';

const Index: React.FunctionComponent = () => {

  const [authRequest, setAuthRequest] = useState({
    direction: true,
    ammount: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  }

  return (
    <>
      <Principal>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label 
              className="mb-4 text-medium block" 
              htmlFor="id"
            >Global ID</label>
            <input
              id="id"
              type="text"
              name="globalIdName"
              autoComplete="false" 
              placeholder="Gloabl Id"
              onChange={handleChange}
              className="w-full border h-20 px-5 focus:outline-none focus:border-blue-600" 
            />
          </div>
          <button
            type="submit"
            className="py-5 px-14 bg-green-600 rounded-full text-white text-2xl mt-5 focus:outline-none"
          >GlobalID</button>
        </form>
        <div>
          <div className="flex justify-between my-10">
            <h4 className="text-2xl">Solicitar confirmación si las direcciones son diferentes</h4>
            <input
              id="address"
              defaultChecked={authRequest.direction}
              onChange={() => setAuthRequest({...authRequest, direction: !authRequest.direction})}
              type="checkbox" />
          </div>
          <div className="flex justify-between my-10">
            <h4 className="text-2xl">Solicitar confirmación cuando el monto es mayor a $100</h4>
            <input
              id="ammount"
              defaultChecked={authRequest.ammount}
              onChange={() => setAuthRequest({...authRequest, ammount: !authRequest.ammount})}
              type="checkbox" />
          </div>
        </div>
      </Principal>
    </>
  );
}

export default Index
 