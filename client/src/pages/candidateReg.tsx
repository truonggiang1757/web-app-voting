const candidateReg = () => {
  return (
    <main className="body1">
        <div className="container1">
            <div className="title">Candidate Information</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full name</span>
                                <input type="text" placeholder="Enter full name" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">ID</span>
                                <input type="text" placeholder="Enter ID" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Date of birth</span>
                                <input type="text" placeholder="Enter date of birth" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">User ID</span>
                                <input type="text" placeholder="Enter user ID" required/>
                            </div>
                            <div className="input-box">
                                <span className="details">Description</span>
                                <textarea name="" id=""></textarea>
                            </div>
                            <div className="gender-details">
                                <input type="radio" name="gender" id="dot-1" />
                                <input type="radio" name="gender" id="dot-2" />
                                <span className="gender-title">Gender</span>
                                <div className="category gap-4">
                                    <label htmlFor="dot-1">
                                        <span className="dot one"></span>
                                        <span className="gender">Male</span>
                                    </label>
                                    <label htmlFor="dot-2">
                                        <span className="dot two"></span>
                                        <span className="gender">Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Register"/>
                        </div>
                </form>
            </div>
        </div>
    </main>
  )
}

export default candidateReg