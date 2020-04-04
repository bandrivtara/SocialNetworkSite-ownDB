import profileReducer, { addPostActionCreator } from "./ProfileReducer";


it('new post should be added', () => {
    // 1. start data (necessary start data to test)
    let action = addPostActionCreator("Hello!!!")
    let state = {
        postData: [
            {id: 1, message: "How are u?", likesCount: 12},
            {id: 2, message: "It's my second post", likesCount: 15},
            {id: 3, message: "It's my first post?", likesCount: 1},
        ]};

    // 2. action (action that we test)
    let newState = profileReducer({state}, {action});

    // 3. expectation (...of our test)
    expect(newState.postData[3].message).toBe("Hello!!!");
})