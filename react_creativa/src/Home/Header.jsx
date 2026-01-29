import React from 'react'

function Header() {
    return (
        <div>
            <div className="container my-5 pt-5">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <h2 className="text-center">To Do List</h2>
                        <h4 id="btn"></h4>
                        <form id="myform">
                            <input type="text" placeholder="Enter Your Works" name="Works" id="works" className="form-control my-5" />
                            <input type="submit" className="btn btn-success btn-block" value="Enter" />
                        </form>
                        <ol id="result" className="mt-3">
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header