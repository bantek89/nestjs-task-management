//feature
class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    global.console.log(`${name} is now a friend`);
  }

  removeFriend(name) {
    const index = this.friends.indexOf(name);

    if (index === -1) {
      throw new Error('Friend not found');
    }

    this.friends.splice(index, 1);
  }
}

//tests
describe('FriendsList', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('intialises friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a new friend to the list', () => {
    friendsList.addFriend('friend');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn();
    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('friend');
    expect(friendsList.announceFriendship).toHaveBeenCalledWith('friend');
  });

  describe('removeFriend', () => {
    it('removes a friend from the list', () => {
      friendsList.addFriend('Ariel');
      expect(friendsList.friends[0]).toEqual('Ariel');
      friendsList.removeFriend('Ariel');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend doess not exist', () => {
      expect(() => friendsList.removeFriend('Ariel')).toThrow(
        new Error('Friend not found'),
      );
    });
  });
});
