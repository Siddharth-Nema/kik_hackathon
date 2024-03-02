export default function SignUp() {
    return (
        <div className="SignUp">
            <div className="twoboxes">
                <div className="divimg">
                    <img src="https://botup.com/images/blog/chatbot-app-2.png?v=1685597433119865848" alt="Image" className="image" />
                </div>
                <div className="rightcont">
                    <h2>Sign Up</h2>
                    <form>
                        <label>Name:</label>
                        <input type="text" id="name" name="name" required></input>

                        <label>Roll No.:</label>
                        <input type="text" id="rollno" name="rollno" required></input>

                        <label>Department:</label>
                        <input type="text" id="department" name="department" required></input>

                        <label>Create Password:</label>
                        <input type="password" id="password" name="password" required></input>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}