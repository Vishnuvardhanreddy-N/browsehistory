import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

const BrowseItems = props =>{
    const {BrowseDetails,deleteApp} = props
    const {id,timeAccessed,logoUrl,title,domainUrl} = props
    const onDelete = () => {
    deleteApp(id)
  }
    return(
        <li className="user-card-container">
        <p className="time"> {timeAccessed} </p>
      
      <div className="user-details-container">
        <img src={logoUrl} className="logo-pic" alt="logo-pic" />
        <p className="title"> {title} </p>
        <p className="domain-url"> {domainUrl} </p>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
    )
}
const App = () => {
    state = {
    searchInput: '',
    usersDetailsList: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  deleteApp = id => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.id !== id,
    )
    this.setState({
      usersDetailsList: filteredUsersData,
    })
}
    render(){
         const {searchInput, usersDetailsList} = this.state
          const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
        return{
            <div className="app-container">
                <div className = "search-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                    className = "app-logo"
                    alt = "app logo"
                    />
                    <img src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                    className = "search-logo"
                    alt = "search"
                    />
                    <input
                    type="search"
                    placeholder = "search History"
                    onChange={this.onChangeSearchInput}
                    value={searchInput}
                    />

                </div>
                <ul className="list-container">
                {searchResults.map(eachUser => (
                    <BrowseItems
                    BrowseDetails={eachUser}
                    key={eachUser.id}
                    deleteApp={this.deleteApp}
                    />
                ))}
                </ul>
            </div>
        }
    }
}

export default App
