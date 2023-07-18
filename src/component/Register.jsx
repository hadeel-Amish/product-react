// import { Form, Button } from "react-bootstrap";

function Register() {
  return (
    <form className="mt-5">
      <div className="text-center">
        <label for="exampleInputEmail1" className=" me-5 fw-bolder">
          UserName:
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="  Enter UserName"
          className=""
        />
      </div>
      <div className="text-center">
        <label for="exampleInputEmail1" className="mt-2 me-3 fw-bolder">
          Email address:
        </label>
        <input
          type="email"
          classn="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          className="mb-2 mt-2"
        />
      </div>
      <div className="text-center">
        <label for="exampleInputPassword1" className="me-5 fw-bolder">
          Password:
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          className="mb-2"
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-dark me-1 mt-3">
          Submit
        </button>
      </div>
    </form>
  );
}
export default Register;
