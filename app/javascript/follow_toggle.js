import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton
    // Your code here
    this.addEventListener('click', this.handleClick(e).bind(this))
  }

  async handleClick(e) {
    // Your code here
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