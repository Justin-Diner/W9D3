import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton
    // Your code here
    this.toggleButton.addEventListener('click', this.handleClick.bind(this))
  }

  async handleClick(e) {
	e.preventDefault();
    if (this.followState === "followed") {
		console.log("followed")
		this.unfollow();
	} else {
		console.log("Unfollowed")
		this.follow();
	}
  }

  async follow() {
    // Your code here
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}