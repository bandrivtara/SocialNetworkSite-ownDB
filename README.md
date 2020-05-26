# Social-Network site created using React-Redux

Visit to see live (please wait few minutes for loading page): [https://social-netwok.herokuapp.com/home](https://social-netwok.herokuapp.com/home).
Visit to see DataBase (Json server): [http://my-server-tb.herokuapp.com/](http://my-server-tb.herokuapp.com/).


### Key features:

1.Pagination
2.Searching
3.Categorisation
4.Fake API from Json fake Rest server
5.Best practices of developing react application implemented
6.Preloader
7.CRUD operations
8.Scroll-loading
9.Authorization

### Main pages: 

1.Login
2.Home
3.Messages
4.Users
5.Photos
6.Profile

## Documentation

### `1.Login`
![Image alt](https://github.com/bandrivtara/SocialNetworkSite-ownDB/raw/master/src/assets/view/Login.png)

Authorization using login (Mike) and password (1234). If you are not login you can't sign to Messages, Users, Profile. Used validation to these fields.

### `2.Home`
![Image alt](https://github.com/bandrivtara/SocialNetworkSite-ownDB/raw/master/src/assets/view/Home.png)

Left sidebar: load new photos on click 'More photos'. On click 'Tranding Photos' navigate to 'Photos' category.
Center content: load all posts with actual 'likes' and 'comments' from different users using react-infinite-scroll. On posts click opened post in modal window wich also content comments.
Right sidebar: load only unfollowed users on click 'More Users'. On click 'You may know' navigate to 'Users' category.

### `3.Messages`
![Image alt](https://github.com/bandrivtara/SocialNetworkSite-ownDB/raw/master/src/assets/view/Messages.png)

Prototipe of typical messanger with actual users and messages.

### `4.Users`
![Image alt](https://github.com/bandrivtara/SocialNetworkSite-ownDB/raw/master/src/assets/view/Users.png)

All users on this network. You can follow/unfollow any users you want or go to his Profile (view profile). Also this page have pagination.

### `5.Photos`
![Image alt](https://github.com/bandrivtara/SocialNetworkSite-ownDB/raw/master/src/assets/view/Photos.png)

Photos with albums (categorization). Unfortunately, It not possible to add new photos when you use Json server.

### `6.Profile`
![Image alt](https://github.com/bandrivtara/SocialNetworkSite-ownDB/raw/master/src/assets/view/Profile2.png)

Profile page which content users profile. Cover pictures automaticly chooses from your posts cover. You can change avatar and status clicked on these items (only your own profile). Also you can open your 'Followers'

![Image alt](https://github.com/bandrivtara/SocialNetworkSite-ownDB/raw/master/src/assets/view/Profile2.png)

Actual user posts. In your own profile you can add new post

### `Json server`
My Json Server:
![Image alt](https://github.com/bandrivtara/SocialNetworkSite-ownDB/raw/master/src/assets/view/DB.png)

Documentation: View [README](https://github.com/typicode/json-server)

## Installation

Clone this app to your computer. 
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

