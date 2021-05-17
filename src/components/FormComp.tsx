import React from "react";

const FormComp = () => {
  return (
    <div>
      <form>
        <div className="form row">
          <div className="form-group col-12 mb-3">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group col-12 mb-3">
            <input type="text" className="form-control" placeholder="Phone" />
          </div>
          <div className="form-group col-12 mb-3">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group col-12 mb-3">
            <textarea
              rows={Number[5]}
              className="form-control"
              placeholder="Message"
            />
          </div>
          <div className="form-group col-12">
            <button className="btn btn-secondary btn-lg col-12">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComp;
