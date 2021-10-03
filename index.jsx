const users = [
    {id: 1, name:"Yurii", lastName:"Leonov", address:"Some Address"},
    {id: 2, name:"Sasha", lastName:"Ivanov", address:"Some Address"},
    {id: 3, name:"Dima", lastName:"Sergeev", address:"Some Address"},
    {id: 4, name:"Dima", lastName:"Sergeev", address:"Some Address"},
    ]

class StartComponent extends React.Component{
    render(){
        return <>
        <div class="content">
            <UserWrapperComponent users= {users} />
        </div>
        </>;
    }
}

class UserWrapperComponent extends React.Component {
    render() {
        let array = this.props.users;
        return array.map(x => <UserCardComponent user={x}/>);
    }
}

class UserCardComponent extends React.Component {
    render() {
        let user = this.props.user;

        return <>
        <div class="user-card">
            <div class="user-content">
                <h1>{user.name}</h1>
                <h2>{user.lastName}</h2>
                <h3>{user.address}</h3>
            </div>

            <div class="user-footer">
                <b>{user.id}</b>
            </div>
        </div>
        </>;
    }
}

ReactDOM.render(
    <StartComponent/>,
    document.getElementById("app")
)