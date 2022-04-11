const CreateGameForm = () => {
    return(
        <div>
            <input type="text" placeholder="Game Name..."/>
            <input type="number"/>
            <input type="password" placeholder="password..."/>
            <input type="password" placeholder="confirm password..."/>
            <input type="submit"/>
        </div>
    );
}

export default CreateGameForm;